var gradientMaker = new Vue({
    el: '#gradientDiv',
    data: {
        topColor: '#d1c4e9',
        bottomColor: '#ffffff'
    },
    computed: {
        getStyleObject: function () {
            var ct = this.topColor;
            var cb = this.bottomColor;
            var styleObject = {
                "background-image": `linear-gradient(to bottom, ${ct}, ${cb})`
            }
            return styleObject;
        }
    },
    methods: {
        setStyleColor: function (area, value) {
            if (area == 'top') {
                this.topColor = value;
            } else if (area == 'bottom') {
                this.bottomColor = value;
            }
            return;
        },
        saveImg: function () {
            var newCanvas = document.createElement('canvas');
            newCanvas.setAttribute('width', '1500');
            newCanvas.setAttribute('height', '240');
            var ctx2 = newCanvas.getContext('2d');
            ctx2.rect(0, 0, newCanvas.width, newCanvas.height);
            var grd2 = ctx2.createLinearGradient(0, 0, 0, newCanvas.height);
            grd2.addColorStop(0, `${this.topColor}`);
            grd2.addColorStop(.95, `${this.bottomColor}`);
            ctx2.fillStyle = grd2;
            ctx2.fill();
            download(newCanvas.toDataURL('image/png'), `gradient-${this.topColor}-${this.bottomColor}.png`, 'image/png');
            return;
        },
        getStyleObject2: function () {
            var ct = this.topColor;
            var cb = this.bottomColor;
            var bg = `background-image: linear-gradient(to bottom, ${ct}, ${cb});`
            return bg;
        }
    }
})