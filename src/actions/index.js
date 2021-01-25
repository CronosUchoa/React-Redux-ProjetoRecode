    import CLICK_UPDATE_VALUE from './actionTypes'

//action creator
/*
é responsável por criar e retornar um objeto "action", que, ao ser disparado,
irá comunicar ao Reducer que o type é "CLICK_UPDATE_VALUE",
além do valor "newValue: value" que deverá ser atualizado na Store.
*/ 


 const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
});

export default clickButton;