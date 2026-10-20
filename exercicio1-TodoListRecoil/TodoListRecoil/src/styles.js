import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    min-width: 320px;
    margin: 0;
    color: #1f2937;
    background: #eff6ff;
    font-family: Arial, sans-serif;
  }
  button, input { font: inherit; }
`

export const Page = styled.main`
  padding: 24px 16px;
  @media (min-width: 640px) { padding: 32px 24px; }
  @media (min-width: 768px) { padding: 40px 32px; }
  @media (min-width: 1024px) { padding: 48px; }
  @media (min-width: 1280px) { padding: 56px; }
  @media (min-width: 1536px) { padding: 64px; }
`

export const Card = styled.section`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  background: #fff;
  @media (min-width: 640px) { padding: 28px; }
`

export const Title = styled.h1`
  margin: 0 0 20px;
  color: #1d4ed8;
  font-size: 1.5rem;
  text-align: center;
  @media (min-width: 768px) { font-size: 1.75rem; }
`

export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`

export const Input = styled.input`
  width: 100%;
  min-width: 0;
  padding: 10px;
  border: 1px solid #93c5fd;
  border-radius: 4px;
  &:focus { outline: 2px solid #2563eb; outline-offset: 1px; }
`

export const PrimaryButton = styled.button`
  border: 1px solid #2563eb;
  border-radius: 4px;
  padding: 10px 14px;
  color: #fff;
  background: #2563eb;
  cursor: pointer;
  &:hover { background: #1d4ed8; }
`

export const Filters = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
`

export const FilterButton = styled.button`
  flex: 1;
  border: 1px solid #c4b5fd;
  border-radius: 4px;
  padding: 8px;
  color: #5b21b6;
  background: #faf5ff;
  cursor: pointer;
  white-space: nowrap;
  &:hover:not(:disabled) { background: #ede9fe; }
  &:disabled { color: #fff; border-color: #7c3aed; background: #7c3aed; cursor: default; }
`

export const TaskList = styled.ul`
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px;
  border: 1px solid #bae6fd;
  border-radius: 4px;
  background: #f0f9ff;
`

export const TaskLabel = styled.label`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
  overflow-wrap: anywhere;
  cursor: pointer;
`

export const DeleteButton = styled.button`
  border: 0;
  padding: 6px 8px;
  color: #dc2626;
  background: transparent;
  cursor: pointer;
  &:hover { color: #991b1b; text-decoration: underline; }
`

export const EmptyMessage = styled.p`
  margin: 20px 0 0;
  color: #64748b;
  text-align: center;
`
