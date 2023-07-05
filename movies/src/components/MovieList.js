//Importing all movie images 
import aNewHope from '../images/ANewHope';
import empire from '../images/Empire';
import returnOfJedi from '../images/ReturnOfJedi';

export const data = [
    {
        id: 1,
        img: aNewHope,
        title: "Star Wars A New Hope",
        text: "A farm boy dreams of adventure and a princess rebels against an evil Empire. The fate of the galaxy is forever changed when Luke Skywalker discovers his powerful connection to a mysterious Force, and blasts into space to rescue Princess Leia.",
        reviews: [
            {
                "stars": 4,
                "comment": "The beggining of the Saga"
            }
        ]
    }, 
    {
        id: 2,
        img: empire,
        title: "Star Wars The Empire Strikes Back",
        text: " Luke Skywalker trains to master the Force so he can confront the powerful Sith lord, Darth Vader.",
        reviews: [
            {
                "stars": 5,
                "comment": "Best of the originals. Masterpiece plot!"
            }
        ]
        
    },
    {
        id: 3,
        img: returnOfJedi,
        title: "Star Wars Return of the Jedi",
        text: "Luke Skywalker and friends travel to Tatooine to rescue their companion Han Solo from the vile Jabba the Hutt. The Empire prepares to crush the Rebellion with a more powerful Death Star, while the Rebel fleet mounts a massive attack on the space station.",
        reviews: [
            {
                "stars": 4,
                "comment": "Great ending of the story!"
            }
        ]
        
    }
]