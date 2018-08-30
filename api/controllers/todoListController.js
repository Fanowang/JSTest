'use strict';

exports.gettask = function (req, res) {

    var testfun = function (n1, n2) { return n1 + n2; };
    var t = function () { return 'it is another test'; };
    //console.log(t());
    t();

    (function () { console.log('another test!'); })();



    var performAction = function (person, action = "sometest1") {
        //action = typeof action === "undefined" ? "sometest" : action;
        return person + " - " + action;
    };

    function skulk(ninja) {
        return performAction(ninja, "skulking");
    }
    var rule = daimyo => performAction(daimyo, "ruling");

    console.log(skulk("Hattori"));
    console.log(rule("Oda Nobunaga"));

    function multiMax(first, ...remainNum) {
        var total = 0;
        remainNum.forEach(element => {
            total += element;
        });

        return first * total;

    };

    console.log(performAction("Elvis"));

    console.log("Total number: " + multiMax(2, 3, 2, 3, 4, 5, 3, 2, 4, 5));

    (() => console.log("Arrow function test!"))();




    console.log(keytest(32, 32, 23, 43, 545, 65, 65, 6554));

    console.log("Key: " + keytest(23, 231, 23, 21, 32, "givemekey", 234, 234, 322));

    function strictmodethis() {
        return this;
    }

    console.log("value is " + (strictmodethis() === undefined));
    function getMyContext() {
        return this;
    }

    console.log("it's ? " + getMyContext());
    var ninja1 = {
        mycontext: getMyContext
    };
    console.log("it's ?" + (ninja1 === ninja1.mycontext()));

    function ninjas() {
        this.myContext = function () {
            return this;
        };

    }

    var ninjaa = new ninjas();
    var ninjab = new ninjas();

    assert(ninjaa.myContext() === ninjaa, "this is ninjiaa!");

    assert(ninjab.myContext() === ninjab, "this is ninjiab!");


    var puppet = {
        rules: false
    }
    function Emperor() {
        this.rules = true;
        return puppet;
    }
    var emperor = new Emperor();
    assert(emperor.rules === false, "It's using puppet value!");

    res.json({ message: 'it is a test' + testfun(1, 3) });
}

function keytest(test1, test2) {
    console.log("arguments 5: " + arguments[5]);
    var returnedvalue = getsomevalue();
    console.log(returnedvalue);
    if (arguments[5] === "givemekey") {
        return "accesskey";

    }
    else {
        return test1 * test2;
    }

};

function getsomevalue() {
    return "It's a return value test!";
}

function assert(val1, val2) {
    if (val1) {
        console.log(val2);
    }
}