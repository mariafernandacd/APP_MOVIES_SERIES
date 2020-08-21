
import { MEDIA, CATEGORY } from "../helpers/i18n"

export const useTitle = (media, search) => {
 
  return `${MEDIA[media]} ${CATEGORY[search]}`
}