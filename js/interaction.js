var Interaction = (function(){
    let step = 0;

    // define the users here, they should have an ID, Name and an default image
    //
    let dany = {id: 1, classid : "#user_1", name:"dany", isVisible:"true", src: "res\\avatars\\dany.jpg" };
    let dofu = {id: 2, classid : "#user_2", name:"dofu", isVisible:"false", src: "res\\avatars\\dofu.jpg" };
    let duarte = {id: 3, classid : "#user_3", name:"duarte", isVisible:"false", src: "res/avatars/duarte.jpg" };
    let pedro = {id: 4, classid : "#user_4", name:"pedro", isVisible:"false", src: "res/avatars/pedro.jpg" };

    let users = [dany, dofu, duarte, pedro];

    // this array defined the interactions in the game.
    // It is sorted meaning the interactions will roll from top to bottom
    const interaction = [
        {user: dany, text:"test1", animation:"bounce", timer: 2000, special:null},
        {user: dany, text:"test2", animation:"bounce", timer: 2000, special:null},
        {user: dofu, text:"test3", animation:"bounceInRight", timer: 2000, special:null},
        {user: dany, text:"test4", animation:"bounce", timer: 1000, special:null},
        {user: dofu, text:"test5", animation:"bounce", timer: 2000, special:null},
        {user: duarte, text:"test6", animation:"bounceInTop", timer: 2000, special:null},
        {user: dofu, text:"test7", animation:"bounce", timer: 2000, special:null},
        {user: pedro, text:"test8", animation:"bounceInRight", timer: 2000, special:null},
        {user: dany, text:"test9", animation:"bounce", timer: 2000, special:null},
        {user: dofu, text:"test10", animation:"tada", timer: 1000, special:null},
        {user: duarte,  text:"test11", animation:"bounce", timer: 2000, special:null},
        {user: pedro, text:"test12", animation:"bounce", timer: 2000, special:null},
        {user: duarte, text:"test13", animation:"bounce", timer: 2000, special:null},
        {user: pedro, text:"test14", animation:"bounce", timer: 2000, special:null},
        {user: dany, text:"test15", animation:"bounce", timer: 2000, special:null},
        {user: dofu, text:"test16", animation:"bounce", timer: 2000, special:null},
        {user: duarte, text:"test17", animation:"bounce", timer: 1000, special:null},
        {user: pedro, text:"test18", animation:"bounce", timer: 750, special:null},
        {user: duarte, text:"test19", animation:"pulse", timer: 1000, special:null},
        {user: duarte, text:"test20", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"test21", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"test22", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"test23", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"test24", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"test25", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"test26", animation:"pulse", timer: 750, special:null},
        {user: duarte, text:"test27", animation:"", timer: 750, special:null},
        {user: duarte, text:"test28", animation:"", timer: 750, special:null},
        {user: duarte, text:"test29", animation:"", timer: 750, special:null},
        {user: duarte, text:"test30", animation:"", timer: 750, special:null},
        {user: dany, text:"test31", animation:"bounce", timer: 2000, special:null},
        {user: dofu, text:"test32", animation:"bounce", timer: 2000, special:null},
        ];

    var getInteraction = function() {
        console.log(`Executing interaction no. ${step}`)
        let interact = interaction[step];
        step++;
        return interact;
    }

    var getCharacters = function() {
        return users;
    }

    var toggleVisibility = (user) => {
        user.IsVisible = !user.IsVisible;
    }

    return {
        getInteraction: getInteraction,
        getCharacters : getCharacters,
        toggleVisibility : toggleVisibility
    };

})();