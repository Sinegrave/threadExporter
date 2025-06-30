/* THIS IS DAUNTING!!!! */

/**
 * 
 * 
 *  POP-UP SIDE
 * 
 * 
 *  */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); 
  }

  dequeue() {
    return this.isEmpty() ? "Queue is empty" : this.items.shift();
  }

  peek() {
    return this.isEmpty() ? "Queue is empty" : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join("  "));
  }
}

const queue = new Queue();

/**
 * 
 * 
 * DREAMWIDTH SIDE 
 * 
 * 
 * */

/* Find a comment, any comment, and add a button that says 'add to tracker'. */
    const comment = document.getElementsByClassName("comment");
    const bottomRow = document.getElementsByClassName("link reply first-item");
    const threadLink = document.getElementsByClassName("link commentpermalink");
    const entryTitle = document.getElementsByClassName("entry-title");
    const topLevel = document.getElementsByClassName("entry-readlink first-item");
    links();
    addThread();

    function links(){
        let j = 0;
        while (j < comment.length){
                const shoe = bottomRow[j];
                if (shoe !== undefined && shoe !== null){
                    shoe.innerHTML += ")​    ​ ​    (";
                    if (threadLink[j] != undefined){ 
                        var brisket = threadLink[j].getElementsByTagName("a")[0].href;
                        let index = brisket.lastIndexOf("c");
                        var pickles = brisket.slice(index - brisket.length);
                        shoe.appendChild(createNode(pickles));
            }
        }
            j = j + 1; }
    }

    
    function createNode(x){
        const node = document.createElement("a");
        const text = document.createElement("span");
        const loading = document.createElement("span");
        const done = document.createElement("span");
        const classy = "atlasLink";
        if (x !== undefined && x !== null){
            node.setAttribute("id", x);
            node.setAttribute("class", classy);

            text.innerText = "Export";
            text.setAttribute("class", "text");    
            loading.setAttribute("class", "loader");
            loading.style.display = "none";

            /*  Let's build a circle. */
            loading.style.width = "20px";
            loading.style.height = "20px";
            loading.style.borderWidth = "5px";
            loading.style.borderColor = "#FFF";
            loading.style.borderStyle = "solid";
            loading.style.borderBottomColor = "#afeeee";
            loading.style.borderRadius = "50%";
            loading.style.display = "none";
            loading.style.boxSizing = "border-box";
            loading.style.animation = "rotation 1s linear infinite";


            done.setAttribute("class", "done");
            done.innerHTML = "✔️";
            done.style.display = "none";


            node.appendChild(text);
            node.appendChild(loading);
            node.appendChild(done);
            return node; 
        }

        else {
            return node;
        }
    }

    function addLoader(x){
       var color = document.getElementById(x);
       var sound = color.getElementsByClassName("atlasLink")[0];
       var movie = sound.getElementsByClassName("loader")[0];
       var film = sound.getElementsByClassName("text")[0];
       movie.style.display = "inline-block";
       film.style.display = "none";

       movie.animate([
        // key frames
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
      ], {
        // sync options
        duration: 1000,
        iterations: Infinity
      });
    }

    function removeLoader(x){
        var color = document.getElementById(x);
        var sound = color.getElementsByClassName("atlasLink")[0];
        var movie = sound.getElementsByClassName("loader")[0];
        var film = sound.getElementsByClassName("done")[0];
        movie.style.display = "none";
        film.style.display = "inline-block";
     }
 

    /** 
     * 
     *  The meat and potatoes! 
     * 
     *  Click on said comment and have a thing happen. 
     *  getTotalComments() and getDateStarted() have a delay to them. 
     * 
     * 
     * */
    
    function addThread() {
        const boxes = document.querySelectorAll('.atlasLink');

        boxes.forEach(atlasLink => {
            atlasLink.addEventListener('click', async function handleClick(event) {
            addLoader(this.id);
            readTL();
            queue.print();
            addBox();
            removeLoader(this.id);
        });
    });
    }

    /** Create a box. */
    function addBox() {
        const location = document.getElementsByClassName("separator separator-before")[1];
        const holder = document.createElement("div");
        const padder = document.createElement("div");
        const copyButton = document.createElement("a");
        const downloadButton = document.createElement("a");
        copyButton.setAttribute("id", "theCopyButton");
        holder.setAttribute("id", "theCommentBox");

         /*  Let's build a box. */
            holder.style.backgroundColor = "white";
            holder.style.width = "100%";
            holder.style.padding= "10px";
            holder.style.height = "250px";
            holder.style.overflow ="auto";
            holder.style.marginBottom ="15px";
            var list = queue.size();
            var i = 0;
            while (i < list){
                holder.innerHTML += queue.dequeue(i) + "<br>";
            i++}

            padder.style.height= "25px";
            padder.style.width = "25px";
        
            copyButton.style.backgroundColor = "#a42226";
            copyButton.style.borderColor = "#831b1e;";
            copyButton.style.width = "100px";
            copyButton.style.padding= "10px";
            copyButton.style.borderRadius = "2px";
            copyButton.style.textDecoration = "none";
            copyButton.style.height = "50px";
            copyButton.style.borderWidth = "1px";
            copyButton.style.color = "white";
            copyButton.style.marginRight = "5px";
            copyButton.style.boxShadow = "0 1px 0 rgba(255,255,255,0.5) inset";

            downloadButton.style.backgroundColor = "#a42226";
            downloadButton.style.borderColor = "#831b1e;";
            downloadButton.style.width = "100px";
            downloadButton.style.padding= "10px";
            downloadButton.style.borderRadius = "2px";
            downloadButton.style.textDecoration = "none";
            downloadButton.style.height = "50px";
            downloadButton.style.borderWidth = "1px";
            downloadButton.style.color = "white";
            downloadButton.style.boxShadow = "0 1px 0 rgba(255,255,255,0.5) inset";

            copyButton.innerHTML = "Copy to Clipboard";
            downloadButton.innerHTML = "Download";
            location.appendChild(holder);
            location.appendChild(copyButton);
            location.appendChild(downloadButton);
            location.appendChild(padder);
            copyButton.addEventListener("click", copyBox);
            
    }

    function copyBox(){
        var copyText = document.getElementById("theCommentBox").innerText;
        console.log(copyText);
        navigator.clipboard.writeText(copyText);

       document.getElementById("theCopyButton").innerHTML = "✔️";
    }


    /* Look at the top-level and add each username + comment pairing to the stack. */
    function readTL(){
        var bread = document.getElementsByClassName("comment-content");
        console.log(bread.length);
        let i = 0;
        while (i < bread.length){        
            const snail = document.getElementsByClassName("poster comment-poster")[i].innerHTML;
            queue.enqueue(snail);
            const katy = document.getElementsByClassName("comment-content")[i];
            const perry = katy.innerHTML;
            queue.enqueue(perry);
            queue.enqueue("\n \n");
            
        i++}
    }

    




