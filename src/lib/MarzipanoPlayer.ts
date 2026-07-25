import type { TourData, Scene, SceneData } from '@/types/tour'
import * as Marzipano from 'marzipano';

export class MarzipanoPlayer {

    private viewer

    private scenes: Scene[] = []

    private readonly data: TourData

    constructor(
        container: HTMLElement,
        data: TourData
    ) {

        this.data = data;

        this.viewer = new Marzipano.Viewer(container);

        this.createScenes();

        //this.switchScene(this.scenes[0]);

    }

    private createScenes() {
/*
        this.scenes = this.data.scenes.map(scene => {
            var urlPrefix = "tiles";
            var source = Marzipano.ImageUrlSource.fromString(
                urlPrefix + "/" + scene.id + "/{z}/{f}/{y}/{x}.jpg",
                { cubeMapPreviewUrl: urlPrefix + "/" + scene.id + "/preview.jpg" });
            var geometry = new Marzipano.CubeGeometry(scene.levels);

            var limiter = Marzipano.RectilinearView.limit.traditional(scene.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
            var view = new Marzipano.RectilinearView(scene.initialViewParameters, limiter);

            var sc = this.viewer.createScene({
                source: source,
                geometry: geometry,
                view: view,
                pinFirstLevel: true

            })


            // Create link hotspots.
            scene.linkHotspots.forEach(function (hotspot) {
                var element = createLinkHotspotElement(hotspot);
                sc.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
            });

            // Create info hotspots.
            scene.infoHotspots.forEach(function (hotspot) {
                var element = createInfoHotspotElement(hotspot);
                sc.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
            });

            return {
                data: scene,
                scene: sc,
                view: view
            };

        }*/
    }


    destroy() {

        this.viewer.destroy?.()

    }

}
