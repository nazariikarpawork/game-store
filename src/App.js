import React from "react";
import Header from './components/Header'
import Footer from "./components/Footer"
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'The forest',
                    img: 'the-forest.webp',
                    desc: "Відеогра з відкритим світом у жанрі survival horror, розроблена компанією «Endnight Games». Альфа-версія гри була випущена у Steam 30 травня 2014 року",
                    category: 'survival',
                    price: '7.99'
                },
                {
                    id: 2,
                    title: 'Pubg',
                    img: 'pubg.jpg',
                    desc: "PUBG: BATTLEGROUNDS — це гра, яка підтримує обмежену міжплатформну гру на пропонованих платформах.\n" +
                        "Це завантаження вмісту також надасть доступ до тестового сервера BATTLEGROUNDS, який вимагає окремого завантаження для відтворення.\n" +
                        "Доступні додаткові покупки в грі.",
                    category: 'battleroyale',
                    price: '12.99'
                },
                {
                    id: 3,
                    title: 'Fortnite',
                    img: 'fortnite.jpg',
                    desc: "онлайнова відеогра, розроблена американською компанією Epic Games і випущена в 2017 році. Fortnite пропонує гравцям на вибір три основних режими гри: Save the World, Battle Royale і Creative.",
                    category: 'battleroyale',
                    price: '4.00'
                },
                {
                    id: 4,
                    title: 'Far Cry 5',
                    img: 'farcry5.jpg',
                    desc: "Far Cry приходить в Америку в останній частині відзначеної нагородами франшизи.Ласкаво просимо до округу Хоуп, штат Монтана, країни вільних і хоробрих, а також дому фанатичного культу кінця світу, відомого як Едемська брама. Встаньте проти лідера культу Джозефа Сіда та його братів і сестер, Вісників, щоб розпалити вогонь опору та звільнити обложену спільноту.",
                    category: 'shooter',
                    price: '50.99'
                },
                {
                    id: 5,
                    title: 'Far Cry 4',
                    img: 'farcry4.jpg',
                    desc: "У високих Гімалаях ховається Кірат, країна, пронизана традиціями та насильством. Ви Аджай Гале. Подорожуючи до Кірата, щоб виконати передсмертне бажання своєї матері, ви опиняєтесь у громадянській війні, щоб повалити репресивний режим диктатора Паган Міна. Досліджуйте та орієнтуйтесь у цьому величезному відкритому світі, де небезпека та непередбачуваність підстерігають за кожним кутом. Тут кожне рішення має значення, а кожна секунда – це історія. Ласкаво просимо до Kyrat.",
                    category: 'shooter',
                    price: '25.99'
                },
                {
                    id: 6,
                    title: 'Far cry 3',
                    img: 'farcry3.webp',
                    desc: "Far Cry 3 — це шутер від першої особи з відкритим світом, дія якого відбувається на острові, несхожому на інші. Місце, де озброєні до зубів воєначальники торгують рабами. Де за чужинцями полюють заради викупу. І коли ви починаєте відчайдушну спробу врятувати своїх друзів, ви розумієте, що єдиний спосіб втекти від цієї темряви… це прийняти її",
                    category: 'shooter',
                    price: '10.50'
                },
                {
                    id: 7,
                    title: 'Dota 2',
                    img: 'dota.jpg',
                    desc: "Щодня мільйони гравців у всьому світі вступають у бій за одного з понад сотні героїв Dota. І немає значення, буде це 10-та година гри чи 1000-на, завжди знайдеться щось нове для відкриття. Завдяки регулярним оновленням, які забезпечують постійну еволюцію ігроладу, можливостей та героїв, Dota 2 дійсно розпочала жити власним життям.",
                    category: 'strategy',
                    price: '3.99'
                },
                {
                    id: 8,
                    title: 'Dead by daylight',
                    img: 'dbd.webp',
                    desc: "Dead by Daylight — це багатокористувацька (4 проти 1) гра в жанрі горор, де один із гравців стає безжальним убивцею, а решта чотири намагаються втекти, уникнути захоплення, катування і вбивства та врятуватися.\n" +
                        "\n" +
                        "Утікачі грають з видом від третьої особи та мають перевагу з кращим контролем оточення. Вбивця грає з видом від першої особи та більше сфокусований на переслідуванні своїх жертв.\n" +
                        "\n" +
                        "Мета втікачів — врятуватися та утекти з території вбивства, не потрапивши до рук убивці, і зробити це набагато важче, ніж може здатися, особливо якщо оточення змінюється з кожним перезапуском гри.",
                    category: 'survival',
                    price: '19.25'
                },
                {
                    id: 9,
                    title: 'Cs-go',
                    img: 'cs-go.jpg',
                    desc: "Counter-Strike: Global Offensive (CS:GO) продовжує розвивати командний бойовий ігролад, що зробив серію успішною багато років тому.\n" +
                        "\n" +
                        "CS:GO пропонує нові мапи, персонажів, зброю, ігрові режими, а також оновлені версії класичного вмісту (de_dust2 тощо).\n" +
                        "\n" +
                        "Даґ Ломбарді з Valve сказав: «Гра Counter-Strike захопила ігрову індустрію зненацька. Мод, який мав мало шансів на успіх, став найпопулярнішою грою-бойовиком для ПК майже одразу після виходу в серпні 1999-го. ",
                    category: 'shooter',
                    price: '10.20'
                },
                {
                    id: 10,
                    title: 'Assassin\'s Creed 2',
                    img: 'asasin.webp',
                    desc: "Assassin’s Creed® 2 є продовженням гри, яка стала найшвидше продаваною новинкою в історії відеоігор. Довгоочікувана назва представляє нового героя, Еціо Аудіторе да Фіренце, молодого італійського дворянина, і нову еру, Ренесанс.\n" +
                        "Assassin’s Creed 2 — це епічна історія про сім’ю, помсту та змову на незайманому, але жорстокому тлі Італії епохи Відродження. Еціо дружить з Леонардо да Вінчі, бере участь у боротьбі з наймогутнішими родинами Флоренції та подорожує каналами Венеції, де вчиться стати майстерним убивцею.",
                    category: 'Stealth-action',
                    price: '10.11'
                },
                {
                    id: 11,
                    title: 'Apex',
                    img: 'apex.jpg',
                    desc: "Перемагайте з характером у Apex Legends, безкоштовному* шутері про героїв, де легендарні персонажі з могутніми здібностями об’єднуються, щоб боротися за славу та багатство на околиці Frontier.\n" +
                        "\n" +
                        "Опануйте постійно зростаючий список різноманітних Легенд, глибоку тактичну гру загону та сміливі нові інновації, які виходять за межі досвіду Battle Royale — і все це в суворому світі, де все допустимо. Ласкаво просимо до наступної еволюції Hero Shooter.",
                    category: 'battleroyale',
                    price: '10.99'
                },
                {
                    id: 12,
                    title: '7 days to die',
                    img: '7days-to-die.jpg',
                    desc: "З понад 14 мільйонами проданих примірників, 7 Days визначили жанр виживання з неперевершеним контентом для крафтінгу та створення світу. 7 Days — це гра з відкритим світом, яка розгортається в жорстокому постапокаліптичному світі, який охоплює нежить, і є унікальною комбінацією шутера від першої особи, жахів на виживання, захисту башти та рольових ігор. Він представляє бої, ремесла, грабіж, видобуток корисних копалин, дослідження та розвиток персонажа таким чином, що викликав захоплену реакцію у шанувальників у всьому світі. Зіграйте в першу RPG про виживання зомбі в пісочниці. Navezgane чекає!",
                    category: 'survival',
                    price: '5.99'
                }
            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

                {this.state.showFullItem &&
                    <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                <Footer/>
            </div>
        );
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(el => {
            if (el.id === item.id) {
                isInArray = true;
            }
        })
        if (!isInArray) {
            this.setState({orders: [...this.state.orders, item]})
        }
    }
}

export default App;
