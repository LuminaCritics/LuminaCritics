import { BbStarTrail } from 'beautiful-backgrounds';

export default function StardewBackground () {

    return (
        <div class = "max-w-full max-h-screen overflow-hidden absolute inset-0">
            <bb-star-trail
        data-num-stars="1000"
        data-star-size-min="0.1"
        data-star-size-max="3"
        data-star-speed-min="0.001"
        data-star-speed-max="0.003"
        data-star-color-hue-start="0"
        data-star-color-hue-end="75"
        data-star-color-saturation-start="90"
        data-star-color-saturation-end="90"
        data-star-color-lightness-start="20"
        data-star-color-lightness-end="80"
        data-orbit-radius-min="100"
        data-orbit-radius-max="100000"
        data-star-lifespan-min="1000"
        data-star-lifespan-max="50000"
        data-width="2000"
        data-height="2000"
    ></bb-star-trail>
        </div>
        );
    }