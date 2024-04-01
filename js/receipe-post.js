$(document).ready(function () {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    const id = params.get('id');

    fetchData();

    function fetchData() {
        $.ajax({
            url: "receipes.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
                renderData(data);
            },
            error: function () {
                $("#result").html("Error fetching data.");
            }
        });
    }

    function renderData(data) {
        const selectedRecipe = data.find(x => x.id.toString() === id);
        
        renderImage(selectedRecipe.img);
        renderMealDetails(selectedRecipe);
        renderRating(selectedRecipe.rating);
        renderSteps(selectedRecipe.steps);
        renderIngredients(selectedRecipe.ingredients);
    }

    function renderImage(img) {
        let html = "<h1>No data</h1>"
        if (img === null) {
            $("#receipe-img-slider").html(html);
            return;
        }

        html = `<img src="${img}" alt="">`;

        $("#receipe-img-slider").html(html);
    }

    function renderMealDetails(recipe) {
        let html = "<h1>No data</h1>"
        if (recipe === null) {
            $("#meal-details").html(html);
            return;
        }

        html = `<span>${recipe.postedAt}</span>
                <h2>${recipe.name}</h2>
                <div class="receipe-duration">
                    <h6>Prep: ${recipe.prepTimeMins} mins</h6>
                    <h6>Yields: ${recipe.servings} Servings</h6>
                </div>`;

        $("#meal-details").html(html);
    }

    function renderRating(rating) {
        let html = "<h1>No data</h1>"
        if (rating === null) {
            $("#rating").html(html);
            return;
        };

        html = "";
        for (let i = 0; i < rating; i++) {
            html += `<i class="fa fa-star" aria-hidden="true"></i>`
        }

        $("#rating").html(html);
    }

    function renderSteps(steps) {
        let html = "<h1>No data</h1>"
        if (steps === null) {
            $("#steps").html(html);
            return;
        };

        html = "";
        for (let i = 0; i < steps.length; i++) {
            html += `
            <div class="single-preparation-step d-flex">
                <h4>0${i + 1}.</h4>
                <p>${steps[i]}</p>
            </div>`
        }

        $("#steps").html(html);
    }

    function renderIngredients(ing){
        let html = "<h1>No data</h1>"
        if (ing === null) {
            $("#ing").html(html);
            return;
        };

        html = "<h4>Ingredients</h4>";
        for (let i = 0; i < ing.length; i++) {
            html += `  <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="${i}">
                            <label class="custom-control-label" for="${i}">${ing[i]} </label>
                        </div>`
        }

        $("#ing").html(html);
    }

});