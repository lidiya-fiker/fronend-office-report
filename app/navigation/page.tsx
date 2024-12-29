'use client'
import { Tabs } from "@mantine/core";
export default function page() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List justify="flex-end">
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
