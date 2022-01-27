import { GrLanguage } from 'react-icons/gr'
import { IsoNameCountries } from '../constants/IsoNameCountries'

export const ChangeCountry = ({ city, setCity }) => {
  return (
    <div className="flex items-center justify-center max-w-xs ml-10 mb-5 pb-2 border-b-2 border-rose-900 font-semibold">
      <GrLanguage className="text-3xl mr-3" />
      <span className="text-xl">News of</span>
      <select
        className="text-xl font-semibold"
        value={city}
        onChange={(e) => setCity(e.target.value)}>
        {IsoNameCountries.map(country => (
          <option
            key={country.value}
            value={country.value}>{country.label}</option>
        ))}
      </select>
    </div>
  )
}
