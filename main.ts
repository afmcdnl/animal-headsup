input.onGesture(Gesture.LogoUp, function () {
    Animal = text_list.removeAt(randint(0, text_list.length))
    basic.showString("" + (Animal))
})
let Animal = ""
let text_list: string[] = []
text_list = ["turtle", "frog", "dog", "cat", "snake", "elephant", "tiger"]
basic.forever(function () {
    if (0 == text_list.length) {
        control.reset()
    }
})
