import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={<p>Auth component</p>} />
            <Route path='/*' element={<p>General component</p>} />
        </Routes>
    )
}
