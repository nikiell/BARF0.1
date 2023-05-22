import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';



function BARFSystem() {
  return (
    <div>
      <Typography variant="h2">Система BARF для годування тварин</Typography>
      <Typography variant="body1">
        Система BARF, або Biologically Appropriate Raw Food, є харчуванням тварин на основі сирих продуктів, що максимально наближаються до природних раціонів диких предків наших собак і котів.
      </Typography>
      <Typography variant="body1">
        Ця система базується на використанні сирих м'ясних продуктів, кісток, органів і деяких овочевих компонентів, які забезпечують тваринам необхідні поживні речовини для оптимального здоров'я.
      </Typography>
      <Typography variant="body1">
        Чому обирати систему BARF для годування тварин? Ось кілька причин:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Здоров'я травної системи: Сира їжа допомагає зберегти здорові зуби і ясна, поліпшує перетравлення і знижує ризик виникнення проблем з шлунково-кишковим трактом." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Сприяє оптимальному здоров'ю: Система BARF забезпечує тваринам необхідну раціоном поживних речовин, включаючи білки, жири, вітаміни і мінерали, що підтримують їх загальне здоров'я і імунітет." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Зменшує ризик алергій: Використання натуральних інгредієнтів може допомогти зменшити ризик реакцій на харчування, алергій та шкірних проблем." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Покращує активність і настрій: Годування за системою BARF може забезпечити тваринам енергію та життєву силу, сприяючи покращенню їх активності та настрою." />
        </ListItem>
      </List>
      <Typography variant="body1">
        Враховуючи всі ці переваги, система BARF є привабливим варіантом для годування тварин, сприяючи їхньому здоров'ю та добробуту. Завжди важливо консультуватись з ветеринаром, перш ніж впроваджувати нову систему годування, щоб упевнитися, що вона відповідає потребам вашого улюбленця.
      </Typography>
    </div>
  );
}

export default BARFSystem;