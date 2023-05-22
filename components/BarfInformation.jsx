import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const BarfInformation = () => {
  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          В системі харчування BARF ,
          молочні продукти не є необхідною складовою частиною раціону для котів та собак. Однак,
          в деяких випадках, невелика кількість молочних продуктів може бути прийнятною для
          деяких тварин.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Слід звернути увагу, що багато котів та собак мають непереносимість лактози, що означає,
          що вони не можуть належним чином перетравлювати лактозу, цукор, який міститься в молоці.
          Це може спричиняти шлункові розлади, такі як діарея або запор.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Якщо ваша тварина переносить молочні продукти і не має непереносимості лактози, деякі
          молочні продукти, такі як нежирний йогурт або кефір, можуть бути додані до раціону в
          невеликих кількостях як джерело пробіотиків і кальцію.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Проте, рекомендується звернутися до ветеринарного фахівця, який зможе оцінити потреби
          вашої тварини і надати конкретні рекомендації щодо харчування, включаючи використання
          молочних продуктів. Кожна тварина має індивідуальні потреби, і ветеринар зможе надати
          вам оптимальні поради з урахуванням її здоров'я і особливостей.
        </Typography>
      </Box>
    </Paper>
  );
};

export default BarfInformation;
