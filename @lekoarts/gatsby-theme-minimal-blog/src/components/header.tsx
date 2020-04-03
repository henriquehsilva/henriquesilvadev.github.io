/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"
import replaceSlashes from "../utils/replaceSlashes"

const Header = () => {
  const { siteTitle } = useSiteMetadata()
  const { navigation: nav, externalLinks, basePath } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [5, 3] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>        
        <Link
          to={replaceSlashes(`/${basePath}`)}
          aria-label={`${siteTitle} - Back to home`}
          sx={{ 
            color: `heading`,
            textDecoration: `none`,
            fontFamily: '-apple-system, Helvetica, Arial, sans-serif',
          }}>
          <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [1, 4] }}>
            <span sx={{backgroundColor: '#f2f2f2', color: '#2a2a2a', padding: '0.5rem'}}>HENRIQUE SILVA</span>
            <span sx={{backgroundColor: '#000', color: '#fff', fontWeight: `bold`, padding: '0.5rem'}}>DEV</span>
          </h1>
        </Link>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 1,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <div></div>
        <Navigation nav={nav} />
        {/* {externalLinks && externalLinks.length > 0 && (
          <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
            {externalLinks.map(link => (
              <Styled.a key={link.url} href={link.url} target={link.target}>
                {link.name}
              </Styled.a>
            ))}
          </div>
        )} */}
      </div>      
    </header>
  )
}

export default Header
