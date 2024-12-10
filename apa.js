        // undoes default refresh
        document.getElementById("form").addEventListener("submit", (e) => { e.preventDefault(); });

        function completeCitation() {

          //required variables for output
          let articleName = document.getElementById("title").value;
          let publishingYear = document.getElementById("year").value;
          let retrievedFrom = document.getElementById("url").value;
          // first if/else variables : what kind of author is it?
          let authorLastName = document.getElementById("an").value;
          let authorFirstInitial = document.getElementById("in").value;
          // let govDepo = document.getElementById("gov").value;

            document.getElementById("citation").innerHTML = `${authorLastName}, ${authorFirstInitial}. (${publishingYear}). <i>${articleName}</i> Retrieved From ${retrievedFrom}`
        }
        // function authorFields() {
        //     switch (document.getElementById("num").value) {
        //         case "1" :
        //             var showField = document.getElementById("add");
        //             showField.style.display = "block";
        //     }
        // }
        // function addAuthors() {
        //     var showField = document.getElementById("add");

        //     showField.style.display = "block";
        //         }
        //   function deleteAuthors(){
        //     var showField = document.getElementById("add");

        //     showField.style.display = "none";
        //         }
        //   function addGovAuthors() {
        //     var showField2 = document.getElementById("govAdd");

        //     showField2.style.display = "block";
        //   }
        //   function deleteGovAuthors() {
        //     var showField2 = document.getElementById("govAdd");

        //     showField2.style.display = "none";
        //   }