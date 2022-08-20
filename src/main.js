// @ts-check

require('dotenv').config()

const { GITHUB_ACCESS_TOKEN } = process.env

const { program } = require('commander')
const { Octokit } = require('octokit')

program.version('0.0.1')

const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN })

const OWNER = 'dev-connor'
const REPO = 'fc21-cli-study'

program
  .command('me')
  .description('Check my profile')
  .action(async () => {
    const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated()
    console.log("Hello, %s", login)
  })

program
  .command('list-bugs')
  .description('List issues with bug label')
  .action(async () => {
    const result = await octokit.rest.issues.listForRepo({
      owner: OWNER,
      repo: REPO, 
      labels: 'bug',
    })

    const issuesWithBugLabel = result.data.filter(
      (issue) => 
        issue.labels.find((label) => label.name === 'bug') !== undefined
    )

    const output = issuesWithBugLabel.map(issue => ({
      title: issue.title,
      number: issue.number
    }))

    console.log(output)
  })

// 풀 리퀘스트를 모두 검사해서, 만약 너무 diff 가 큰 (100줄) 풀 리퀘스트가 있으면 `too-big` 이라는 레이블을 붙인다.
program
  .command('check-prs')
  .description('Check pull request status')
  .action(async () => {
    const result = await octokit.rest.pulls.list({
      owner: OWNER,
      repo: REPO,
      
    })

    result.data.map(pr => {

    })

    const prsWithDiff = await Promise.all(
        result.data.map(async pr => ({
          number: pr.number,
          compare: await octokit.rest.repos.compareCommits({
            owner: OWNER,
            repo: REPO,
            base: pr.base.ref,
            head: pr.head.ref,
        }),
      }))
      )
    
    console.log(diffs.map(diff => diff.compare.data.files))
  })

program.parseAsync()