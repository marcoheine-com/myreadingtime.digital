import React from 'react';
import * as ui from './ui';

const Features = () => {
  return (
    <ui.Section>
      <ui.Headline>
        myreadingtime.digital is a place for you and your books
      </ui.Headline>

      <ui.FeatureList>
        <ui.Listitem>
          <ui.Icon>🕵🏼‍♀️</ui.Icon>
          <h3>Search for books</h3>
          <p>
            Search for all the information about the books you love and find out
            where to get them
          </p>
        </ui.Listitem>

        <ui.Listitem>
          <ui.Icon>📝</ui.Icon>
          <h3>Want to read list</h3>
          <p>Make a list of books, you would like to read this year</p>
        </ui.Listitem>

        <ui.Listitem>
          <ui.Icon>📚</ui.Icon>
          <h3>Books you red</h3>
          <p>Keep track of all the great books you already red</p>
        </ui.Listitem>

        <ui.Listitem>
          <ui.Icon>🏆</ui.Icon>
          <h3>Reading Challenge</h3>
          Set up a reading challenge: We all would like to read more, why not
          add a little gamification to it?
        </ui.Listitem>
      </ui.FeatureList>
    </ui.Section>
  );
};

export default Features;
