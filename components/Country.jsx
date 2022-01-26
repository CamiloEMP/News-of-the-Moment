import { GrLanguage } from 'react-icons/gr'
import { IsoNameCountries } from '../constants/countries'

export const ChangeCountry = () => {
  return (
    <div className="flex items-center">
      <GrLanguage />
      <span>News of Colombia</span>
      <select name="" id="">
        <option value="">Nada</option>
        <option value="">Nada</option>
      </select>
    </div>
  )
}
