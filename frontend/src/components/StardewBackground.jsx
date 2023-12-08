import Starback from "starback";

export default function StardewBackground () {

    let canvas = document.getElementById ("canvas");

    let starback = new Starback (canvas , {
        type : "dot",
        quantity : 100,
        direction : 200,
        backgroundColor : ["#3c3c3c"],
        randomOpacity : true,
        starColor : ["#ffffff"]
    });

    starback.generateStar(30);

    return (
        <canvas class = "-z-50" id="canvas"></canvas>
    );
}