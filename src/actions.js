import * as actions from './actionTypes';

export const bugAdded =(description,resolved)=>({
   
        type:actions.BUG_ADDED,
        payload:{ 
      description,
      resolved
      
    }
  

})

export const bugRemoved=id=>({

    type:actions.BUG_REMOVED,
    payload:{
      id
    }

})

export const bugResolved=id=>({

    type:actions.BUG_RESOLVED,
    payload:{
      id
    }

})
