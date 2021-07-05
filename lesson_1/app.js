// 1. Var / Let, Const: Scope, Hosting--------------------------------------------------------
// Code block: if else, loop, {}, ...

// Scope: 
{
    var course = 'Javascript basic!';

    {
        {
            console.log(course);
        }
    }
}

// Hosting: chi ho tro var
var a = 1; // var a; a = 1
b = 1;
var b; // Dua dinh nghia bien len trc tien

// 2. Const / Var, Let: Assignment------------------------------------------------------------
var a = 1;
a = 100; // ok

const b = 10;
b = 100; // error

// Code thuan: var
// Babel: const, let
// ==> Khi dinh nghia bien va khong gan lai: Const
// ==> Khi gan lai gia tri cho bien : let
