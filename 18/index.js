class Wrapper {
    constructor() {
        this.$el = document.createElement("div");
        this.$el.classList.add("wrapper");

        this.form = new Form()

        this.chat = new Chat();
    }

    start() {
        [this.chat, this.form].map(item => this.$el.appendChild(item.render()))
        document.body.appendChild(this.$el)
    }
}

class Chat {
    constructor() {
        this.$el = document.createElement("div");
        this.$el.classList.add("chat");
    }

    callEl() {
        return document.querySelector(".chat");
    }

    scrollToBottom(){
        document.querySelector(".chat").scrollTo({
            top: document.querySelector(".chat").scrollHeight,
            behavior: "smooth"
        })
    }

    render() {
        return this.$el;
    }
}

class Form {
    constructor() {
        this.$el = document.createElement("form");

        this.input = new Input({ class: "user-input" });

        this.button = new Button({ class: "btn btn-primary" });

        this.chat = new Chat();

        this.bot = new Bot()

    }

    handlerInput() {
        this.input.onChange(value => {
            if (value) {
                this.button.isDisabled(false);
            } else {
                this.button.isDisabled(true);
            }
        })
    }


    handlerButton() {
        this.button.sendMes((e) => {
            const el = this.chat.callEl();
            const inputValue = this.input.returnValue();


            new MessageItem(userMessage => {
                el.appendChild(userMessage(this.input.returnValue()));
                this.button.isDisabled(true);
                this.input.isDisabled(true);
                this.input.clearValue();
            });


            new MessageItem((userMessage, botMessage) => {
                this.chat.scrollToBottom();
                const fake = this.bot.speachWithDelay(this.random() * 1000, inputValue);

                fake.then(str => {
                    el.appendChild(botMessage(str, inputValue));
                    this.input.isDisabled(false);

                    if (this.bot.returnCurrentI() === this.bot.returnArrLength()) {
                        setTimeout(() => {
                            el.textContent = "";
                        }, 1000);
                    }
                    this.button.switchClass("btn-warning", "btn-primary");
                }).catch(error => {
                    this.button.switchClass("btn-warning", "btn-danger");
                    const isRefresh = confirm(error.message);
                    if (isRefresh) window.location.reload();
                    this.input.isDisabled(false);
                }).finally(() => {
                    this.chat.scrollToBottom();
                })
            })

        })

    }

    random(){
        return Math.floor(Math.random() * 3 + 1);
    }

    render() {
        this.handlerInput();
        this.handlerButton();
        [this.input, this.button].map(item => this.$el.appendChild(item.render()));
        return this.$el;
    }

}

class Input {
    constructor(props) {
        this.$el = document.createElement("input");
        this.$el.classList.add(props.class);
        this.$el.type = "text";
        this.$el.placeholder = "Введите текст";
    }

    onChange(cb) {
        this.$el.addEventListener("input", (e) => {
            e.preventDefault()
            cb(this.$el.value);
            e.witch
        })
    }

    returnValue(x) {
        return this.$el.value;
    }

    isDisabled(bool) {
        this.$el.disabled = bool;
    }
    clearValue() {
        this.$el.value = "";
    }

    render() {
        return this.$el;
    }
} 

class Button {
    constructor(props) {
        this.$el = document.createElement("button");
        this.$el.textContent = "Отправить";
        this.$el.type = "button";
        this.$el.disabled = true;
        props.class.split(" ").map(_class => this.$el.classList.add(_class));
    }

    isDisabled(bool) {
        this.$el.disabled = bool;
    }

    switchClass(class1, class2) {
        this.$el.classList.add(class2);
        this.$el.classList.remove(class1);
    }

    addClass(value) {
        this.$el.classList.add(value);
    }

    remove(value) {
        if (this.$el.classList.contains(value)) this.$el.classList.remove(value);
    }

    sendMes(cb) {
        this.$el.addEventListener("click", (e) => {
            cb()
        })
    }

    render() {
        return this.$el;
    }


}

class Bot {
    #speak = "speak";
    #stop = "stop";
    #answerArr = ["Здравствуйте!",
        "Как ваши дела?",
        "Это хорошо!",
        "У меня все отлично!",
        "Что делаете?",
        "Это круто!",
        "Очищаю чат!"
    ];

    #byeArr = ["до свидания","до встречи","до завтра","пока"];


    constructor() {
        this.lastAnswerI = 0;
        this.state = this.#speak;
    }

    returnCurrentI() {
        return this.lastAnswerI;
    }

    returnNewAnswerI() {
        return this.lastAnswerI++;
    }

    resetI() {
        return this.lastAnswerI = 0;
    }

    returnArrLength() {
        return this.#answerArr.length;
    }

    canISpeak() {
        return this.state === this.#speak;
    }

    speach(value) {
        if (this.state === this.#stop) {
            throw new Error("Бот уже ушел! Позвать его?")
        }
        if (this.#byeArr.includes(value.toLowerCase())) {
            this.state = this.#stop;
            return "Всего хорошего!"
        }
        if (this.state === this.#speak) {
            if (this.#answerArr.length - 1 >= this.lastAnswerI) {
                return this.#answerArr[this.returnNewAnswerI()];
            } else {
                this.resetI();
                return this.#answerArr[this.returnNewAnswerI()];
            }
        }


    }

    speachWithDelay(ms, value = "") {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(this.speach(value))
                } catch (error) {
                    reject(error)
                }
            }, ms)
        });
    }
}



class MessageItem {
    constructor(executor) {
        this.$el = document.createElement("div");

        const userMessage = (value) => {
            return this.createMes(value, "user");
        }

        const botMessage = (value) => {
            return this.createMes(value, "bot");
        }

        executor(userMessage, botMessage);
    }

    createMes(value, type) {
        const el = document.createElement("div");
        el.classList.add(`${type}-message-item`);

        const span = document.createElement("span");
        span.textContent = value;
        span.classList.add(`${type}-message-span`);

        el.appendChild(span);
        return el;
    }
}

const chat = new Wrapper();

chat.start()
