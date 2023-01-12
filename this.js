// In general, the this references the object of which the function is a property, or the parent object of the function.
//  In other words, the this references the object that is currently calling the function.

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag);
        }, this);
    }
};

// As the forEach callback function is in the global scope, it needs this added outside it (but still in the execution context of the 
//  showTags method) to console log the title from the video object

video.showTags();

// function Video(title) {
//     this.title = title;
//     console.log(this);
// };

// const i = new Video('b');