var config = {
    style: 'mapbox://styles/ambarja/cme4nlxel01qw01s2btmd3d87',
    accessToken: 'pk.eyJ1IjoiYW1iYXJqYSIsImEiOiJjbGdianBsdDUwMTZqM2VyeWF4NjV2eDF5In0.yT1eZ1Jhg6qIjKaibMTm3g',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Harmonize Project',
            image: './assets/san-fran.jpeg',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.',
            location: {
                center: [-73.4388389, -4.0619196],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'TMRC-Fasciola-Cajamarca',
            image: './assets/washington-dc.jpg',
            description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [-78.5115362, -7.1618763],
                zoom: 10.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'TMRC-Fasciola-Cusco',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-71.969774, -13.5321518],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Mellon-Arequipa',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, la capital de Argentina, es una ciudad dinámica...',
            location: {
                center: [-71.547981, -16.4043189],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: function () {
                // Esperar un poco y volver al primer capítulo
                setTimeout(() => {
                    map.flyTo({
                        center: config.chapters[0].location.center,
                        zoom: config.chapters[0].location.zoom,
                        pitch: config.chapters[0].location.pitch,
                        bearing: config.chapters[0].location.bearing,
                        essential: true
                    });
                    // Si también quieres mostrar el texto del primer capítulo:
                    document.getElementById(config.chapters[0].id).scrollIntoView({ behavior: "smooth" });
                }, 4000); // 4 segundos de espera antes de volver
            },
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
