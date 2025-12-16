function drawTextInBox(doc, content, x, y, options = {}) {
    // Default options
    const defaults = {
        padding: 8,
        fontSize: 8,
        font: 'Helvetica-Bold',
        borderWidth: 1,
        borderColor: '#000000',
        borderOpacity: 1,
        fullWidth: true,
        fullHeight: false,
        maxWidth: 535,
        maxHeight: 200,    
        overflow: 'wrap',   
        textAlign: 'left',
        lineSpacing: 2,
        lineHeight: 1.2,
        lineGap: 0 // New option for additional space between lines
    };

    const opts = { ...defaults, ...options };

    // Handle input content
    let isMultipleLines = Array.isArray(content);
    let textArray;
    
    if (isMultipleLines) {
        textArray = content.map(item => {
            if (typeof item === 'object' && item !== null) {
                return {
                    text: item.text?.toString() || '',
                    font: item.font || opts.font,
                    fontSize: item.fontSize || opts.fontSize,
                    textAlign: item.textAlign || opts.textAlign
                };
            }
            return {
                text: item?.toString() || '',
                font: opts.font,
                fontSize: opts.fontSize,
                textAlign: opts.textAlign
            };
        });
    } else {
        // Handle newlines in single string by splitting into array
        const contentStr = content?.toString() || '';
        if (contentStr.includes('\n')) {
            textArray = contentStr.split('\n').map(line => ({
                text: line,
                font: opts.font,
                fontSize: opts.fontSize,
                textAlign: opts.textAlign
            }));
            isMultipleLines = true;
        } else {
            textArray = [{
                text: contentStr,
                font: opts.font,
                fontSize: opts.fontSize,
                textAlign: opts.textAlign
            }];
        }
    }

    // Calculate maximum width from all text
    let maxTextWidth = 0;
    textArray.forEach(item => {
        doc.font(item.font)
           .fontSize(item.fontSize);
        const width = doc.widthOfString(item.text);
        maxTextWidth = Math.max(maxTextWidth, width);
    });

    // Determine box width
    const boxWidth = opts.fullWidth ? opts.maxWidth : maxTextWidth + (opts.padding * 2);

    // Calculate total text height
    let totalTextHeight = 0;
    textArray.forEach((item, index) => {
        doc.font(item.font)
           .fontSize(item.fontSize);
           
        totalTextHeight += doc.heightOfString(item.text, {
            width: boxWidth - (opts.padding * 2)
        });
        
        if (index < textArray.length - 1) {
            totalTextHeight += opts.lineSpacing + opts.lineGap;
        }
    });

    totalTextHeight *= opts.lineHeight;

    const boxHeight = opts.fullHeight 
        ? opts.maxHeight 
        : totalTextHeight + (opts.padding * 2);

    // Draw rectangle with opacity
    doc.lineWidth(opts.borderWidth)
        .strokeColor(opts.borderColor)
        .opacity(opts.borderOpacity)
        .rect(x, y, boxWidth, boxHeight)
        .stroke()
        .opacity(1); // Reset opacity to default

    let currentY = y + opts.padding;
    let overflow = false;

    // Write multiple lines
    for (let i = 0; i < textArray.length; i++) {
        let item = textArray[i];

        if (typeof item === 'string') {
            item = {
                text: item,
                font: opts.font,
                fontSize: opts.fontSize,
                textAlign: opts.textAlign
            };
        }
        
        // Skip empty lines but still add spacing
        if (item.text.trim() === '') {
            currentY += opts.lineSpacing + opts.lineGap;
            continue;
        }
        
        doc.font(item.font)
           .fontSize(item.fontSize);

        const textHeight = doc.heightOfString(item.text, {
            width: boxWidth - (opts.padding * 2)
        }) * opts.lineHeight;

        // Check if text would overflow
        if (currentY + textHeight > y + boxHeight - opts.padding) {
            overflow = true;
            if (opts.overflow === 'truncate') {
                break;
            }
        }

        doc.text(item.text,
            x + opts.padding,
            currentY,
            {
                width: boxWidth - (opts.padding * 2),
                align: item.textAlign,
                lineGap: opts.lineGap
            }
        );

        currentY += textHeight + opts.lineSpacing;
    }

    return {
        width: boxWidth,
        height: boxHeight,
        overflow: overflow
    };
}

module.exports = drawTextInBox;