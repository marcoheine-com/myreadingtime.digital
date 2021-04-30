import React from 'react'
import SignupButton from '../../components/SignupButton'
import * as ui from './ui'

const Features = () => {
  return (
    <ui.Section>
      <ui.Headline>
        myreadingtime.digital is a place for you and your books
      </ui.Headline>

      <ui.FeatureList>
        <ui.Listitem>
          <ui.FeatureHeadline>
            <ui.Icon>
              {' '}
              <span role='img' aria-label='a detective'>
                🕵🏼‍♀️
              </span>
            </ui.Icon>
            Search for books
          </ui.FeatureHeadline>
          <ui.Paragraph>
            Search for all the information about the books you love and find out
            where to get them
          </ui.Paragraph>
          <SignupButton />
        </ui.Listitem>

        <ui.Listitem>
          <ui.FeatureHeadline>
            <ui.Icon>
              <span role='img' aria-label='a list'>
                📝
              </span>
            </ui.Icon>
            Want to read list
          </ui.FeatureHeadline>
          <ui.Paragraph>
            Make a list of books, you would like to read this year.
          </ui.Paragraph>
          <SignupButton />
        </ui.Listitem>

        <ui.Listitem>
          <ui.FeatureHeadline>
            <ui.Icon>
              <span role='img' aria-label='a list'>
                📖
              </span>
            </ui.Icon>
            Currently Reading
          </ui.FeatureHeadline>
          <ui.Paragraph>
            Track your progress of the book you're currently reading.
          </ui.Paragraph>
          <SignupButton />
        </ui.Listitem>

        <ui.Listitem>
          <ui.FeatureHeadline>
            <ui.Icon>
              {' '}
              <span role='img' aria-label='stack of books'>
                📚
              </span>
            </ui.Icon>
            Books you read
          </ui.FeatureHeadline>
          <ui.Paragraph>
            Keep track of all the great books you already read.
          </ui.Paragraph>
          <SignupButton />
        </ui.Listitem>

        <ui.Listitem>
          <ui.FeatureHeadline>
            <ui.Icon>
              <span role='img' aria-label='a trophy'>
                🔕
              </span>
            </ui.Icon>
            No social features
          </ui.FeatureHeadline>
          <ui.Paragraph>
            This place is for you alone and your books. No sharing with friends
            or following.
          </ui.Paragraph>
          <SignupButton />
        </ui.Listitem>

        <ui.Listitem>
          <ui.FeatureHeadline>
            <ui.Icon>
              <span role='img' aria-label='a trophy'>
                🏆
              </span>
            </ui.Icon>
            Coming soon: Reading Challenge
          </ui.FeatureHeadline>
          <ui.Paragraph>
            Set up a reading challenge: We all would like to read more, why not
            add a little gamification to it?
          </ui.Paragraph>
          <SignupButton />
        </ui.Listitem>
      </ui.FeatureList>
    </ui.Section>
  )
}

export default Features
