import visibilityFilter from './visibilityFilter'
import {setVisibilityFilter} from '../actions'

describe('visibilityFilter reducer', () => {
  it('should handle default value', () => {
    expect(
      visibilityFilter(undefined,{} )
    ).toEqual("SHOW_ALL")
  })
  it('should handle SHOW_COMPLETED', () => {
    expect(
      visibilityFilter(undefined,setVisibilityFilter("SHOW_COMPLETED") )
    ).toEqual("SHOW_COMPLETED")
  })
  it('should handle SHOW_ACTIVE', () => {
    expect(
      visibilityFilter(undefined,setVisibilityFilter("SHOW_ACTIVE") )
    ).toEqual("SHOW_ACTIVE")
  })
});