const Canvas = require("canvas")
const Discord = require("discord.js")
const background = "pics/vippstest2.png"

const dim = {
    height: 2532,
    width: 1170,
    margin: 50
}


const generateVipps = async (kr1, msg1, navn1, nr1, fake1) => {
    let kr = kr1
    let msg = msg1
    let navn = navn1.replace("-"," ")
    let nr = nr1
  
    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    //draw background
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    if (fake1 != "true"){
        // FAKE?!
            ctx.font = "130px OpenSans red"
            ctx.fillStyle = "red"
            ctx.fillText(`Dette er en \n falsk overføring.`, dim.margin, 1500)
}

    // write in text
    ctx.fillStyle = "gray"
    ctx.textAlign = "center"

    // draw in the nr
    ctx.font = "30px Roboto"
    console.log("Nummer: " + nr.length)
    if(nr <= 6) {
        ctx.fillText(`#${nr}  •  ${navn}` , dim.width/2, 450)
    } else {
        ctx.fillText(`+47 ${nr.substring(0, 3)} ${nr.substring(3, 5)} ${nr.substring(5, 9)} `, dim.width/2, 450)
    }

    // write in text
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    
    // draw in the kr
    ctx.font = "85px Roboto"
    ctx.fillText(`${kr.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ')} kr`, dim.width/2, 775)

    // draw in msg
    ctx.font = "50px Sans"
    ctx.fillText(`${msg}`, dim.width/2, 900)

   // draw in name
   ctx.font = "60px Sans"
   ctx.fillText(`${navn}`, dim.width/2, 400)


    
 
    ctx.save()
    ctx.restore()

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}

module.exports = generateVipps