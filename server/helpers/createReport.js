const reportPdf = require("../composables/reportPdf");

async function createReport() {
    // const t = await sequelize.transaction();
    try {
        console.log("MASUK CREATE REPORT");
        // res.setHeader("Content-Type", "application/pdf");
        // res.attachment("daily-report.pdf");
        const chunks = [];

        const createCertif = await new Promise((resolve, reject) => {
            console.log("MASUK CREATE CERTIF");
            const stream = {
                write: (chunk) => chunks.push(chunk),
                end: async () => {
                    try {
                        const pdfBuffer = Buffer.concat(chunks);
                        // const createdFile = await updateAndDestroyFiles(
                        //     {
                        //         name: "daily-report.pdf",
                        //         mimetype: "application/pdf",
                        //         data: pdfBuffer,
                        //     },
                        //     findCoo.CertificateFile,
                        //     t
                        // );
                        // console.log(createdFile, "ini create file certif");
                        // console.log(createdFile, "ini id create certif");
                        // resolve(createdFile);
                        resolve(pdfBuffer);
                        console.log(pdfBuffer, "ini pdf buffer");
                        return pdfBuffer;
                    } catch (error) {
                        reject(error);
                    }
                },
            };

            reportPdf.buildPdfReport(
                async (chunk) => stream.write(chunk),
                () => stream.end()
            );
        });

        // await t.commit();
        // console.log(createCertif, "ini id create certif di luar");
        return createCertif;
    } catch (error) {
        console.log(error);
        // await t.rollback();
    }
}

module.exports = createReport;
