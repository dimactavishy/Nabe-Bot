const Canvas = require('canvas');
const { registerFont, createCanvas } = require('canvas')
registerFont('./nabecanvas/fonts/OpenSans-ExtraBold.ttf', { family: 'OpenSansXB' })

module.exports = async function() { 

    const applyText = (canvas, text) => {
        const context = canvas.getContext('2d');

        // Declare a base size of the font
        let fontSize = 70;

        do {
            // Assign the font to the context and decrement it so it can be measured again
            context.font = `${fontSize -= 10}px OpenSansXB`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (context.measureText(text).width > canvas.width);

        // Return the result to use in the actual canvas
        return context.font;
    };

        const canvas = Canvas.createCanvas(500, 500);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('./nabecanvas/narberal.png');

        // This uses the canvas dimensions to stretch the image onto the entire canvas
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        context.font = applyText(canvas, interaction.member.displayName);
        context.fillStyle = '#000000';
        context.fillText('HELP', canvas.width / 2.5, canvas.height / 1.8);

        // Use the helpful Attachment class structure to process the file for you
        const attachment = new MessageAttachment(canvas.toBuffer(), 'nabethumb.png');

}