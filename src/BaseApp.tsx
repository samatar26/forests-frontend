import { Helmet } from 'react-helmet'
import { QueryClient, QueryClientProvider } from 'react-query'

import EntryRouter from './router'
import GlobalStyles from './styles/GlobalStyles'

const queryClient = new QueryClient()

const BaseApp: React.FC = () => (
  <>
    <Helmet title="Forests" />
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <EntryRouter />
    </QueryClientProvider>
  </>
)

export default BaseApp
