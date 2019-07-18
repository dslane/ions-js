function settingsComponent(props) {
  const items = props.settingsStorage.getItem("al");
  if (!items) {
    props.settingsStorage.setItem(
      "al",
      JSON.stringify([
        {
          name: "Three"
        }
      ])
    );
  }

  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            App Settings
          </Text>
        }
      >
        <AdditiveList
          title="Foo"
          settingsKey={"al"}
          addAction={
            <Select
              options={[
                {
                  name: "One"
                },
                {
                  name: "Two"
                }
              ]}
            />
          }
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
