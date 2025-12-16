const { Inbox, File, sequelize } = require('../models');
const inboxPdf = require('../composables/inboxPdf');
const { updateAndDestroyFiles } = require('../composables/variable');

async function createPdf(inboxId) {
    console.log(inboxId,'ini inboxid di createPdf');
    const t = await sequelize.transaction();
    try {
        const inboxData = await Inbox.findByPk(inboxId);
        if (!inboxData) {
            throw new Error(`Inbox with id ${inboxId} not found`);
        }

        // Buat PDF menggunakan buildInboxPDF yang hanya menerima inboxId
        const pdfBuffer = await inboxPdf.buildInboxPDF(inboxId);
        
        // Lakukan update file dengan buffer PDF yang dihasilkan
        const createdFile = await updateAndDestroyFiles(
            {
                name: `INBOX - ${inboxData.refNumber}.pdf`,
                mimetype: "application/pdf",
                data: pdfBuffer,
            },
            inboxData.InboxQrFile || null,
            t
        );
        
        await t.commit();
        return { InboxQrFile: createdFile }; // Return object dengan format sesuai untuk update

    } catch (error) {
        console.log(error);
        await t.rollback();
        throw error; // Re-throw error agar dapat ditangkap di controller
    }
}

module.exports = createPdf;