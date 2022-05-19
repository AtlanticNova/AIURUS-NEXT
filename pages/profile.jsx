// import { Title } from "@mantine/core"

// export default function Home() {
  //   return (
    //     <Layout>
    //       <Title>Profile Page</Title>
    
    //     </Layout>
    //   )
    // }
    
import React from 'react';
import { createStyles, Avatar, Text, Group } from '@mantine/core';
import { PhoneCall, At } from 'tabler-icons-react';
import Layout from "../components/Layout"

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function UserInfoIcons({ avatar, name, title, phone, email }) {
  const { classes } = useStyles();
  return (
    <Layout>
      <div>
        <Group noWrap>
          <Avatar src={avatar} size={94} radius="md" />
          <div>
            <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
              {title}
            </Text>

            <Text size="lg" weight={500} className={classes.name}>
              {name}
            </Text>

            <Group noWrap spacing={10} mt={3}>
              <At size={16} className={classes.icon} />
              <Text size="xs" color="dimmed">
                {email}
              </Text>
            </Group>

            <Group noWrap spacing={10} mt={5}>
              <PhoneCall size={16} className={classes.icon} />
              <Text size="xs" color="dimmed">
                {phone}
              </Text>
            </Group>
          </div>
        </Group>
      </div>
    </Layout>
  );
}