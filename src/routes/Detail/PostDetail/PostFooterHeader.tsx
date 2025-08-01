import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"

type Props = {}

const FooterHeader: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <StyledWrapper>
      <a onClick={() => router.push("/")}>← Back</a>
      <a onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
         ↓ Bottom
      </a>
    </StyledWrapper>
  )
}

export default FooterHeader

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.gray10};
  a {
    margin-top: 0.5rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
    }
  }
`
