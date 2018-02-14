const ACTION = { START: 'START' };
import { someReducer } from './reducer';

 describe('someReducer', () => {

     it('should add a start parameter to true after ACTION.START', () => {
         const result = someReducer({}, { type: ACTION.START });
         expect(result).toEqual({ start: true });
     });

     it('should return the former state', () => {
         const result = someReducer({}, { type: 'autre' });
         expect(result).toEqual({});
     });

 });
