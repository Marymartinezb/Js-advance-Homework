// Constructor
var Gallery = function(id, url){
    this.gallery = document.getElementById(id);
    this.url = url;
    this.index = 0;
    this.total = url.length;
    this.img = this.gallery.getElementsByTagName("img");
}

// Prototype
Gallery.prototype = {
    Constructor: Gallery,
    start: function(){
        this.img[1].src = this.url[0];
        this.next();
        this.previous();
    },
    next: function(){
        var self = this;
        this.img[2].addEventListener('click',function(){
            self.index++;
            if(self.index > self.total-1) {
                self.index--;
            }
            self.img[1].src = self.url[self.index];
        })
    },
    previous: function(){
        var self = this;
        this.img[0].addEventListener('click',function(){
            self.index--;
            if(self.index < 0) {
                self.index++;
            }
            self.img[1].src = self.url[self.index];
        })
    },
}

var gallery1 = new Gallery('gallery', ['img/bosque1.jpg','img/bosque2.jpg','img/bosque3.jpg',]);
gallery1.start();
var gallery2 = new Gallery('gallery2', ['img/bosque2.jpg','img/bosque3.jpg','img/bosque1.jpg',]);
gallery2.start();