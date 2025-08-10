var config = {
    style: 'mapbox://styles/ambarja/cme4xfcrm01mq01qp4at459bl',
    accessToken: 'pk.eyJ1IjoiYW1iYXJqYSIsImEiOiJjbWU1N3ZpMGYwcWRvMmpvaDg0bTdkZjB3In0.1jaUMkZYUz2ApPPXe-p1XQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
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
                zoom: 10.0,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'hexagonos', opacity: 1 },

            ],
            onChapterExit: [
                { layer: 'hexagonos', opacity: 1 },
            ]

        },

        {
            id: 'primer-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Harmonize Project: Llanchama',
            image: './assets/san-fran.jpeg',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.',
            location: {
                center: [-73.4074049, -3.8588215],
                zoom: 15.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'hexagonos', opacity: 1 },
                { layer: 'llanchama-rgb', opacity: 1 },
            ],
            onChapterExit: [
                { layer: 'hexagonos', opacity: 1 },
                { layer: 'llanchama-rgb', opacity: 0 },
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
                curve: 2, // change the speed at which it zooms out
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
                bearing: -43.2,
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
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
