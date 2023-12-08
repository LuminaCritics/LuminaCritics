import Starback from "starback";

export default function StardewBackground () {

    return (
        <div>
            <canvas class = "-z-50" name="canvas"></canvas>
            <script>
            let canvas = document.querySelector ("#canvas");

let starback = new Starback (canvas , {
    type : "dot",
    quantity : 100,
    direction : 200,
    backgroundColor : ["#3c3c3c"],
    randomOpacity : true,
    starColor : ["#ffffff"]
});

starback.generateStar(30);
            </script>
        </div>
    );
}