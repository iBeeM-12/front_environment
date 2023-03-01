import React from "react";

import { Card, CardBody, Container, Heading, VStack } from "@chakra-ui/react";
import { PlusButtonMember } from "../PlusButton";
import { VSpacer } from "../molecules/Spacer";

export const Components = () => {
  return (
    <>
      <VStack>
        <Container maxW="container.lg">
          <VSpacer size={4} />
          <Heading size="lg" textAlign="center">
            Components Mock Storybook
          </Heading>

          {/* GroupIcon */}
          <VSpacer size={8} />
          <Heading size="lg">GroupIcon</Heading>
          <Card variant="filled">
            <CardBody>
              <PlusButtonMember text={"#####"} />
            </CardBody>
          </Card>

          {/* 追加のテンプレート：消さないでね！！ */}

          {/* --------------------*/}
          {/* メモ */}
          {/* ###/###/### の部分には components 以降のパスを記入する */}
          {/* コンポーネントの配置順番はファイルの位置順が嬉しい (性善説) */}

          {/* コード */}
          {/* ###/###/### */}
          {/* <VSpacer size={8} />
          <Heading size="lg">###/###/###</Heading>
          <Card variant="filled">
            <CardBody>
              // ここに追加するコンポーネントを書く
            </CardBody>
          </Card> */}
        </Container>
      </VStack>
    </>
  );
};
