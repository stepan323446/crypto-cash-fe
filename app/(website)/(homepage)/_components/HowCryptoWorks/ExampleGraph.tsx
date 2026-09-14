'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "@shadcn/components/ui/card";

const ExampleGraph = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>TON Currency Chart</CardTitle>
        <CardDescription>Showing cost per 1 TON for the last 6 months</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default ExampleGraph;