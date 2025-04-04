const allowLoad            = true;
const compatibleImporter   = "1.1";


const database = [

/*

    [ "TITLE", "PREP_TIME", "COOK_TIME", "PEOPLE servings", 
        [
            ["SUB_HEADER", 
                [
                    ["QTY", "INGREDIENT"],
                    ["QTY", "INGREDIENT"],
                    ["QTY", "INGREDIENT"],
                ]
            ],

            ["SUB_HEADER", 
                [
                    ["QTY", "INGREDIENT"],
                    ["QTY", "INGREDIENT"],
                    ["*",   "Instruction."],
                ]
            ],

            ["Preparation", 
                [
                    ["LINE_1"],
                    ["LINE_2"],
                    ["Bake at *TEMP °C* for @TIME@@ minutes@@@."],
                ]
            ]
        ],

        ["Adapted from ", "SOURCE", "URL"]
    ],

*/


    [ "Banana Bread",                  "20 mins", "45 mins", "8-12 servings", 
        [
            ["Dry Bowl", 
                [
                    ["250g",      "plain flour (sifted)"],
                    ["1 tsp",     "bicarbonate soda"],
                    ["1/2 tsp",   "ground cinnamon"],
                    ["1/4 tsp",   "salt"],
                    ["135g",      "granulated sugar"],
                ]
            ],

            ["Wet Bowl", 
                [
                    ["56g",       "unsalted butter (melted)"],
                    ["2",         "large eggs"],
                    ["345g",      "mashed bananas (3-4)"],
                    ["80g",       "plain yogurt"],
                    ["1 tsp",     "vanilla extract"],
                ]
            ],

            ["Cinnamon Swirl", 
                [
                    ["50g",       "granulated sugar"],
                    ["1_1/2 tsp", "ground cinnamon"],
                ]
            ],

            ["Preparation", 
                [
                    ["Combine bowls and transfer half of the batter into a cake tin."],
                    ["Evenly sprinkle the cinnamon swirl over the batter."],
                    ["Add the remaining batter, and swirl with a knife."],
                    ["Bake at *160°C** fan forced for @30@@-45 minutes@@@."],
                ]
            ]
        ],

        ["Adapted from", "Sally's Baking Recipes", "https://sallysbakingaddiction.com/cinnamon-swirl-banana-bread/"]
    ],


    [ "Chocolate Cake",                "15 mins", "25 mins", "Serves 8", 
        [
            ["Dry Bowl", 
                [
                    ["200g",      "plain flour (sifted)"],
                    ["6 tbsp",    "cocoa powder"],
                    ["1 tsp",     "baking powder"],
                    ["1 tsp",     "bicarbonate soda"],
                    ["225g",      "light brown soft sugar"],
                    ["1/2 tsp",   "salt"],
                ]
            ],

            ["Wet Bowl", 
                [
                    ["2 tbsp",    "horlics"],
                    ["100ml",     "boiling water"],
                    ["100g",      "smooth biscuit spread (i.e. Biscoff)"],
                    ["85ml",      "vegetable oil (= 78g)"],
                    ["284ml",     "buttermilk (1 standard tub)"],
                    ["2 tsp",     "vanilla extract"],
                    ["2",         "large eggs"],
                ]
            ],

            ["Preparation", 
                [
                    ["Whilst mixing, add in the contents of the dry bowl."],
                    ["Bake at *160°C** for @25@@ minutes@@@."],
                ]
            ]
        ],

        ["Adapted from ", "Olive", "https://www.olivemagazine.com/recipes/baking-and-desserts/ott-chocolate-smores-cake/"]
    ],

    
    [ "Carrot Cake",                   "20 mins", "1 hr",    "Serves 15", 
        [
            ["Dry Bowl", 
                [
                    ["250g",      "plain flour (sifted)"],
                    ["2 tsp",     "baking soda"],
                    ["2 tsp",     "ground cinnamon"],
                    ["1/4 tsp",   "salt"],
                ]
            ],

            ["Wet Bowl", 
                [
                    ["300g",      "white sugar"],
                    ["3",         "large eggs"],
                    ["180ml",     "buttermilk"],
                    ["180ml",     "vegtable oil (= 170g)"],
                    ["2 tsp",     "vanilla extract"],
                ]
            ],

            ["Add-ins",
                [
                    ["2 cups",    "grated carrots (around 4-5)"],
                    ["1 can",     "crushed pinapple with juice"],
                    ["1 cup",     "chopped walnuts (optional)"],
                    ["1 cup",     "raisins (optional)"],
                ]
            ],

            ["Frosting",
                [
                    ["65g",       "unsalted butter (softened)"],
                    ["90g",       "powdered icing sugar"],
                    ["150g",      "cream cheese (cubed)"],
                    ["1 tsp",     "lemon juice"],
                    ["1/4 tsp",   "vanilla extract"],
                    ["*",         "Combine butter and half of the icing sugar."],
                    ["*",         "Add and mix the other ingredients until smooth and fluffy."],
                ]
            ],

            ["Preparation", 
                [
                    ["Gradually add the dry bowl into the wet bowl, mixing until just combined."],
                    ["Stir add-ins into the batter."],
                    ["Bake at *175°C** for @60@@ minutes@@@."],
                ]
            ]

        ],

        ["Adapted from ", "Allrecipes", "https://www.allrecipes.com/recipe/8270/sams-famous-carrot-cake/"]
    ],


    [ "Upside Down Pineapple Cake",    "20 mins", "40 mins", "Serves 10",
        [
            ["Toppings", 
                [
                    ["565g",      "canned pineapple slices in juice (not in syrup)"],
                    ["12-18",     "maraschino/glacé cherries"],
                    ["100g",      "brown sugar"],
                    ["*",         "Line a cake tin with parchment paper, and sprinkle the brown sugar evenly over the base."],
                    ["*",         "Dry the fruit with tea towels, then place on the base, pressing them down firmly."],
                ]
            ],

            ["Dry Bowl", 
                [
                    ["225g",      "plain flour (sifted)"],
                    ["1 tsp",     "baking powder"],
                    ["¼ tsp",     "bicarbonate soda"],
                    ["¼ tsp",     "salt"],
                ]
            ],

            ["Wet Bowl", 
                [
                    ["85 ml",     "milk"],
                    ["65 ml",     "pineapple juice (from tin)"],
                    ["60g",       "sour cream / plain yogurt"],
                    ["1 tsp",     "vanilla extract"],
                ]
            ],

            ["Cream Bowl", 
                [
                    ["115g",      "unsalted butter (melted, at RT)"],
                    ["150g",      "granulated sugar"],
                    ["2",         "large eggs (at room temperature)"],
                ]
            ],

            ["Preparation", 
                [
                    ["Mix in 1/3 of the dry bowl into the cream bowl."],
                    ["Add half of the wet bowl in, mix, then half of the remaining dry bowl."],
                    ["Finally, add the remainder of the wet bowl, then dry bowl."],
                    ["Add remaining pineapple, chopped, into the batter."],
                    ["Bake at *160°C** fan forced for @40@@ minutes@@@."],
                ]
            ]
        ],

        ["Adapted from ", "RecipeTin", "https://www.recipetineats.com/pineapple-upside-down-cake/"]
    ],


    [ "Cookies",                       "15 mins", "25 mins", "Serves 12",
        [
            ["Main Bowl", 
                [
                    ["100g",      "granulated sugar"],
                    ["165g",      "light brown soft sugar"],
                    ["1 tsp",     "salt"],
                    ["115g",      "unsalted butter"],
                    ["1",         "large egg"],
                    ["1 tsp",     "vanilla extract"],
                    ["155g",      "plain flour (sifted)"],
                    ["½ tsp",     "baking soda"],
                ]
            ],

            ["Combine with...",
                [
                    ["~200g",     "broken chocolate (or chocolate chips)"],
                ]
            ],

            ["Preparation", 
                [
                    ["Freeze the batter for a minimum of 30 minutes (for best results, freeze overnight)."],
                    ["Scoop the frozen batter into golf-ball sized spheres."],
                    ["Place the spheres onto a baking tray, around 6cm apart."],
                    ["Bake at *160°C** fan forced until the edges start to brown - around @20@@ minutes@@@."]
                ]
            ]
        ],

        ["Adapted from ", "Tasty", "https://tasty.co/recipe/the-best-chewy-chocolate-chip-cookies"]
    ],


    [ "Belgian Waffles",               "10 mins", "5 mins",  "6-8 waffles",
        [
            ["Dry Bowl", 
                [
                    ["245g",      "plain flour"],
                    ["2 tsp",     "baking powder"],
                    ["1 tbsp",    "sugar"],
                    ["1/2 tsp",   "salt"],
                ]
            ],

            ["Wet Bowl", 
                [
                    ["390ml",     "milk"],
                    ["125ml",     "vegetable oil"],
                    ["3",         "egg yolks (keep egg whites)"],
                    ["1 tsp",     "vanilla extract"],
                ]
            ],

            ["Preparation", 
                [
                    ["Stir the wet mixture into the dry bowl, until almost combined."],
                    ["Fold in the beaten egg whites, just until no streaks remain."],
                    ["Cook in waffle maker until golden (according to manufacturer instructions)."]
                ]
            ]
        ],

        ["", "", ""]
    ],


    [ "Cupcakes",                      "5 mins",  "25 mins", "Serves 12",
        [
            ["Bowl", 
                [
                    ["200g",      "unsalted butter (melted)"],
                    ["200g",      "caster sugar"],
                    ["3",         "large eggs"],
                    ["2 tsp",     "vanilla extract"],
                    ["200g",      "self-raising flour"],
                    ["2 tbsp",    "milk"],
                ]
            ],

            ["Preparation", 
                [
                    ["Bake at *160°C** fan forced for @20@@-25 minutes@@@."]
                ]
            ]
        ],

        ["", "", ""]
    ],


    [ "Brownies",                      "15 mins", "15 mins", "Serves 10",
        [
            ["Bowl", 
                [
                    ["170g",      "unsalted butter (melted)"],
                    ["250g",      "granulated sugar"],
                    ["2",         "large eggs"],
                    ["2 tsp",     "vanilla extract"],
                    ["110g",      "melted chocolate (cooled)"],
                    ["95g",       "plain flour"],
                    ["30g",       "cocoa powder"],
                    ["1 tsp",     "salt"],
                    ["",          "chocolate chips (optional)"],
                ]
            ],

            ["Preparation", 
                [
                    ["Bake at *180°C** fan forced for @12@@-15 minutes@@@."]
                ]
            ]
        ],

        ["", "", ""]
    ],

 
// end of database
];
