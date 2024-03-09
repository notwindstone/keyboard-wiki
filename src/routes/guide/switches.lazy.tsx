import {createFileRoute} from '@tanstack/react-router'
import {Flex} from "@mantine/core";
import Sidebar from "../../layout/Sidebar.tsx";
import Content from "../../layout/Content.tsx";

export const Route = createFileRoute('/guide/switches')({
  component: Switches
})

function Switches() {
  return (
      <main className="main">
          <div className="main__body main__body--guide-item">
              <Flex
                  justify='flex-start'
              >
                  <Sidebar/>
                  <Content page="switches"/>
              </Flex>
          </div>
      </main>
  )
}