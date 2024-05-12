# Questions on Hoisting

1. What is the output of this snippet of code?
    ```
    function foo() {
        x = 1;
        function x() { }
        var x = '2';
        return x;
    }
    alert( typeof foo() );

    Output: String
    ```
The function `foo()` assigns `1` to `x`, declares a function named `x`, reassigns `x` as the string `'2'`, and then returns `x`. When `foo()` is called, it returns `'2'`, so `typeof foo()` is `'string'`, resulting in an alert displaying `'string'`.

2. What is the output of this snippet of code?
    ```
    function foo() {
        return x;
        x = 1;
        
        function x() { }
        
        var x = '2';
    }
    console.log( typeof foo() );

    Output: Function
    ```
The foo() function first returns the function x, which is declared within foo() even though it appears later in the code. This is due to hoisting. So, typeof foo() returns 'function'. The subsequent assignments to x (a function declaration followed by a string assignment) don't affect the return value because the function declaration takes precedence.


3. What is the output of this snippet of code?
    ```
    var x = 1;
    function foo() {
        x = 10;
        return;
        function x() {}
    }
    foo();
    console.log( x );

    Output: 1
    ```
The global variable `x` is assigned `1`. Inside the `foo()` function, a local variable `x` is assigned `10`, but it doesn't affect the global `x`. Therefore, `console.log(x)` prints `1`.
