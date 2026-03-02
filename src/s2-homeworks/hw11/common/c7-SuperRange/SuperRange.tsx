import React from 'react'
import {Slider, SliderProps} from '@mui/material'

// SuperRange — обёртка над MUI Slider с кастомным дизайном
const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // Основные цвета и размеры слайдера
        color: '#0c2',           // цвет активной части трека (между двумя thumb для двойного слайдера)
        borderRadius: 10,
        width: 147,
        height: 4,                // толщина трека (rail(неактивная часть трека, на фоне.) и track(активная часть слайдера между thumb))

        // Стили для ручки (thumb)
        '& .MuiSlider-thumb': {
          height: 18,             // диаметр внешнего круга
          width: 18,
          backgroundColor: '#fff', // белый внешний круг
          border: '1px solid #0c2', // зелёная обводка
          borderRadius: '50%',     // круглая форма
          boxShadow: 'none',       // убираем стандартную тень MUI

          // Внутренний маленький зелёный кружок внутри белого thumb
          '&::after': {
            content: '""',         // пустой элемент
            position: 'absolute',  // позиционируем внутри thumb
            width: 6,              // диаметр внутреннего кружка
            height: 6,
            backgroundColor: '#0c2', // зелёный цвет внутреннего кружка
            borderRadius: '50%',    // круглая форма
          },
        },

        // Стили для неактивного трека (rail)
        '& .MuiSlider-rail': {
          backgroundColor: '#8b8b8b', // серый цвет для неактивной части
        },
      }}
      {...props} // передаём все пропсы, включая value, onChange и т.д.
    />
  )
}

export default SuperRange