import React from 'react';
import './App.css';
import {IdCard} from './components/IdCard/IdCard';
import {Greetings} from './components/Greetings/Greetings';
import {Random} from './components/Random/Random';
import {BoxColor} from './components/BoxColor/BoxColor';
import {CreditCard} from './components/CreditCard/CreditCard';
import {Rating} from './components/Rating/Rating';
import {DriverCard} from './components/DriverCard/DriverCard';
import {LikeButton} from './components/LikeButton/LikeButton';
import {ClickablePicture} from './components/ClickablePicture/ClickablePicture';
import {Dice} from './components/Dice/Dice';
import {Carousel} from './components/Carousel/Carousel';
import {NumbersTable} from './components/NumbersTable/NumbersTable';
import {Facebook} from './components/Facebook/Facebook';
import {SignupPage} from './components/SignupPage/SignupPage';

function App() {
  return (
    <React.Fragment>
      <h2>Id Cards</h2>
        <IdCard image="https://randomuser.me/api/portraits/men/44.jpg" firstName="John" lastName="Doe" gender="male" height={178} birthday={ new Date("1992-07-14") } />
        <IdCard image="https://randomuser.me/api/portraits/women/44.jpg" firstName="Daina" lastName="Slezaite" gender="female" height={172} birthday={ new Date("1996-06-13") } />
      <h2>Greetings</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">Michelle</Greetings>
      <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      <h2>BoxColor</h2>
        <BoxColor r={254} g={127} b={156} />
        <BoxColor r={177} g={156} b={217} />
      <h2>CreditCard</h2>
        <div className="cards-collection">
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bankName="BNP"
              owner="Maxence Bouret"
              bgColor="11aa99"
              textColor="ffffff" />
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bankName="N26"
              owner="Maxence Bouret"
              bgColor="eeeeee"
              textColor="222222" />
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bankName="CaixaBank"
              owner="Daina Slezaite"
              bgColor="ddbb55"
              textColor="ffffff" />
        </div>
        <h2>Rating</h2>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        <h2>DriverCard</h2>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
        }} />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
        }} />
        <h2>LikeButton</h2>
        <LikeButton />
        <h2>ClickablePicture</h2>
        <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png" />
        <h2>Dice</h2>
        <Dice />
        <h2>Carousel</h2>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
        <h2>NumbersTable</h2>
        <NumbersTable limit={18} />
        <h2>Facebook</h2>
        <Facebook />
        <h2>SignupPage</h2>
        <SignupPage />
    </React.Fragment>
  );
}

export default App;
