import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getRepos } from "../library/githubclient";
import { GitHubRepo } from "../library/models/github";
import styles from "@/app/style/modules/components/GitHubRepos.module.css";

const ghUsername = "userbyte";
const ghRepos = await getRepos(ghUsername);
// mock data to prevent api spam
/*
const ghRepos: { status: string; repos: Array<GitHubRepo>; error: string } = {
  status: "SUCCESS",
  error: "",
  repos: [
    {
      id: 1307065416,
      node_id: "R_kgDOTeg8SA",
      name: "ActivityMonitor",
      full_name: "userbyte/ActivityMonitor",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/ActivityMonitor",
      description: "Discord bot for tracking server activity",
      fork: false,
      url: "https://api.github.com/repos/userbyte/ActivityMonitor",
      forks_url: "https://api.github.com/repos/userbyte/ActivityMonitor/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/ActivityMonitor/teams",
      hooks_url: "https://api.github.com/repos/userbyte/ActivityMonitor/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/ActivityMonitor/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/ActivityMonitor/deployments",
      created_at: "2026-07-20T22:34:42Z",
      updated_at: "2026-07-20T22:34:49Z",
      pushed_at: "2026-07-20T22:34:45Z",
      git_url: "git://github.com/userbyte/ActivityMonitor.git",
      ssh_url: "git@github.com:userbyte/ActivityMonitor.git",
      clone_url: "https://github.com/userbyte/ActivityMonitor.git",
      svn_url: "https://github.com/userbyte/ActivityMonitor",
      homepage: null,
      size: 13,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Python",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 1274777622,
      node_id: "R_kgDOS_uQFg",
      name: "ytfam-manager",
      full_name: "userbyte/ytfam-manager",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/ytfam-manager",
      description:
        "automates some of the work involved in managing a youtube premium family",
      fork: false,
      url: "https://api.github.com/repos/userbyte/ytfam-manager",
      forks_url: "https://api.github.com/repos/userbyte/ytfam-manager/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/ytfam-manager/teams",
      hooks_url: "https://api.github.com/repos/userbyte/ytfam-manager/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/ytfam-manager/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/ytfam-manager/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/ytfam-manager/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/ytfam-manager/deployments",
      created_at: "2026-06-19T22:07:05Z",
      updated_at: "2026-06-20T20:41:54Z",
      pushed_at: "2026-06-20T20:41:51Z",
      git_url: "git://github.com/userbyte/ytfam-manager.git",
      ssh_url: "git@github.com:userbyte/ytfam-manager.git",
      clone_url: "https://github.com/userbyte/ytfam-manager.git",
      svn_url: "https://github.com/userbyte/ytfam-manager",
      homepage: null,
      size: 1693,
      stargazers_count: 0,
      watchers_count: 0,
      language: "TypeScript",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 1077307143,
      node_id: "R_kgDOQDZnBw",
      name: "spotifam-manager",
      full_name: "userbyte/spotifam-manager",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/spotifam-manager",
      description:
        "automates some of the work involved in managing a spotify family",
      fork: false,
      url: "https://api.github.com/repos/userbyte/spotifam-manager",
      forks_url: "https://api.github.com/repos/userbyte/spotifam-manager/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/spotifam-manager/teams",
      hooks_url: "https://api.github.com/repos/userbyte/spotifam-manager/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/spotifam-manager/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/spotifam-manager/deployments",
      created_at: "2025-10-16T04:37:19Z",
      updated_at: "2026-06-20T20:42:14Z",
      pushed_at: "2026-06-20T20:42:10Z",
      git_url: "git://github.com/userbyte/spotifam-manager.git",
      ssh_url: "git@github.com:userbyte/spotifam-manager.git",
      clone_url: "https://github.com/userbyte/spotifam-manager.git",
      svn_url: "https://github.com/userbyte/spotifam-manager",
      homepage: null,
      size: 1486,
      stargazers_count: 1,
      watchers_count: 1,
      language: "TypeScript",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: "master",
    },
    {
      id: 1064352537,
      node_id: "R_kgDOP3C7GQ",
      name: "pithing",
      full_name: "userbyte/pithing",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/pithing",
      description: "generic version of spotify car thing",
      fork: false,
      url: "https://api.github.com/repos/userbyte/pithing",
      forks_url: "https://api.github.com/repos/userbyte/pithing/forks",
      keys_url: "https://api.github.com/repos/userbyte/pithing/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/pithing/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/pithing/teams",
      hooks_url: "https://api.github.com/repos/userbyte/pithing/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/pithing/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/pithing/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/pithing/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/pithing/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/pithing/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/pithing/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/pithing/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/pithing/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/pithing/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/pithing/statuses/{sha}",
      languages_url: "https://api.github.com/repos/userbyte/pithing/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/pithing/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/pithing/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/pithing/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/pithing/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/pithing/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/pithing/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/pithing/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/pithing/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/pithing/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/pithing/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/pithing/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/pithing/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/userbyte/pithing/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/pithing/issues{/number}",
      pulls_url: "https://api.github.com/repos/userbyte/pithing/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/pithing/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/pithing/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/userbyte/pithing/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/pithing/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/pithing/deployments",
      created_at: "2025-09-25T23:03:01Z",
      updated_at: "2026-03-21T02:19:05Z",
      pushed_at: "2025-09-25T23:03:03Z",
      git_url: "git://github.com/userbyte/pithing.git",
      ssh_url: "git@github.com:userbyte/pithing.git",
      clone_url: "https://github.com/userbyte/pithing.git",
      svn_url: "https://github.com/userbyte/pithing",
      homepage: "",
      size: 163,
      stargazers_count: 0,
      watchers_count: 0,
      language: "TypeScript",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 912633467,
      node_id: "R_kgDONmWuew",
      name: "simbl",
      full_name: "userbyte/simbl",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/simbl",
      description: " a solo microblogging platform ",
      fork: false,
      url: "https://api.github.com/repos/userbyte/simbl",
      forks_url: "https://api.github.com/repos/userbyte/simbl/forks",
      keys_url: "https://api.github.com/repos/userbyte/simbl/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/simbl/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/simbl/teams",
      hooks_url: "https://api.github.com/repos/userbyte/simbl/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/simbl/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/simbl/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/simbl/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/simbl/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/simbl/tags",
      blobs_url: "https://api.github.com/repos/userbyte/simbl/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/simbl/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/simbl/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/userbyte/simbl/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/simbl/statuses/{sha}",
      languages_url: "https://api.github.com/repos/userbyte/simbl/languages",
      stargazers_url: "https://api.github.com/repos/userbyte/simbl/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/simbl/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/simbl/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/simbl/subscription",
      commits_url: "https://api.github.com/repos/userbyte/simbl/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/simbl/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/simbl/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/simbl/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/simbl/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/simbl/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/simbl/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/simbl/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/userbyte/simbl/downloads",
      issues_url: "https://api.github.com/repos/userbyte/simbl/issues{/number}",
      pulls_url: "https://api.github.com/repos/userbyte/simbl/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/simbl/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/simbl/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/userbyte/simbl/labels{/name}",
      releases_url: "https://api.github.com/repos/userbyte/simbl/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/simbl/deployments",
      created_at: "2025-01-06T04:33:49Z",
      updated_at: "2026-07-13T00:40:54Z",
      pushed_at: "2026-07-13T00:40:50Z",
      git_url: "git://github.com/userbyte/simbl.git",
      ssh_url: "git@github.com:userbyte/simbl.git",
      clone_url: "https://github.com/userbyte/simbl.git",
      svn_url: "https://github.com/userbyte/simbl",
      homepage: "https://simbl.userbyte.xyz",
      size: 679,
      stargazers_count: 0,
      watchers_count: 0,
      language: "TypeScript",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 6,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 6,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 890211308,
      node_id: "R_kgDONQ-L7A",
      name: "simbl-legacy",
      full_name: "userbyte/simbl-legacy",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/simbl-legacy",
      description: "a solo microblogging platform",
      fork: false,
      url: "https://api.github.com/repos/userbyte/simbl-legacy",
      forks_url: "https://api.github.com/repos/userbyte/simbl-legacy/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/simbl-legacy/teams",
      hooks_url: "https://api.github.com/repos/userbyte/simbl-legacy/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/simbl-legacy/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/simbl-legacy/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/simbl-legacy/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/simbl-legacy/deployments",
      created_at: "2024-11-18T07:23:53Z",
      updated_at: "2025-01-06T04:28:54Z",
      pushed_at: "2024-11-18T07:26:07Z",
      git_url: "git://github.com/userbyte/simbl-legacy.git",
      ssh_url: "git@github.com:userbyte/simbl-legacy.git",
      clone_url: "https://github.com/userbyte/simbl-legacy.git",
      svn_url: "https://github.com/userbyte/simbl-legacy",
      homepage: null,
      size: 3631,
      stargazers_count: 0,
      watchers_count: 0,
      language: "SCSS",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 835932466,
      node_id: "R_kgDOMdNRMg",
      name: "wotd",
      full_name: "userbyte/wotd",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/wotd",
      description: "simple word of the day program",
      fork: false,
      url: "https://api.github.com/repos/userbyte/wotd",
      forks_url: "https://api.github.com/repos/userbyte/wotd/forks",
      keys_url: "https://api.github.com/repos/userbyte/wotd/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/wotd/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/wotd/teams",
      hooks_url: "https://api.github.com/repos/userbyte/wotd/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/wotd/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/wotd/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/wotd/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/wotd/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/wotd/tags",
      blobs_url: "https://api.github.com/repos/userbyte/wotd/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/userbyte/wotd/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/userbyte/wotd/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/userbyte/wotd/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/userbyte/wotd/statuses/{sha}",
      languages_url: "https://api.github.com/repos/userbyte/wotd/languages",
      stargazers_url: "https://api.github.com/repos/userbyte/wotd/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/wotd/contributors",
      subscribers_url: "https://api.github.com/repos/userbyte/wotd/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/wotd/subscription",
      commits_url: "https://api.github.com/repos/userbyte/wotd/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/wotd/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/wotd/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/wotd/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/wotd/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/wotd/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/wotd/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/wotd/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/userbyte/wotd/downloads",
      issues_url: "https://api.github.com/repos/userbyte/wotd/issues{/number}",
      pulls_url: "https://api.github.com/repos/userbyte/wotd/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/wotd/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/wotd/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/userbyte/wotd/labels{/name}",
      releases_url: "https://api.github.com/repos/userbyte/wotd/releases{/id}",
      deployments_url: "https://api.github.com/repos/userbyte/wotd/deployments",
      created_at: "2024-07-30T20:16:25Z",
      updated_at: "2026-06-26T03:27:48Z",
      pushed_at: "2026-06-26T03:27:45Z",
      git_url: "git://github.com/userbyte/wotd.git",
      ssh_url: "git@github.com:userbyte/wotd.git",
      clone_url: "https://github.com/userbyte/wotd.git",
      svn_url: "https://github.com/userbyte/wotd",
      homepage: null,
      size: 28,
      stargazers_count: 2,
      watchers_count: 2,
      language: "Go",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 2,
      default_branch: "master",
    },
    {
      id: 831573705,
      node_id: "R_kgDOMZDOyQ",
      name: "discordbot",
      full_name: "userbyte/discordbot",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/discordbot",
      description: "generic discord bot which i use as a template",
      fork: false,
      url: "https://api.github.com/repos/userbyte/discordbot",
      forks_url: "https://api.github.com/repos/userbyte/discordbot/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/discordbot/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/discordbot/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/discordbot/teams",
      hooks_url: "https://api.github.com/repos/userbyte/discordbot/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/discordbot/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/discordbot/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/discordbot/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/discordbot/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/discordbot/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/discordbot/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/discordbot/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/discordbot/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/discordbot/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/discordbot/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/discordbot/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/discordbot/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/discordbot/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/discordbot/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/discordbot/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/discordbot/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/discordbot/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/discordbot/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/discordbot/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/discordbot/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/discordbot/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/discordbot/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/discordbot/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/discordbot/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/discordbot/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/discordbot/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/discordbot/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/discordbot/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/discordbot/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/discordbot/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/discordbot/deployments",
      created_at: "2024-07-21T01:04:51Z",
      updated_at: "2025-09-25T03:01:54Z",
      pushed_at: "2025-09-25T03:01:50Z",
      git_url: "git://github.com/userbyte/discordbot.git",
      ssh_url: "git@github.com:userbyte/discordbot.git",
      clone_url: "https://github.com/userbyte/discordbot.git",
      svn_url: "https://github.com/userbyte/discordbot",
      homepage: null,
      size: 13,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Python",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 826023484,
      node_id: "R_kgDOMTwePA",
      name: "flatpak-profiles",
      full_name: "userbyte/flatpak-profiles",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/flatpak-profiles",
      description: "a flatpak container data manager",
      fork: false,
      url: "https://api.github.com/repos/userbyte/flatpak-profiles",
      forks_url: "https://api.github.com/repos/userbyte/flatpak-profiles/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/flatpak-profiles/teams",
      hooks_url: "https://api.github.com/repos/userbyte/flatpak-profiles/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/flatpak-profiles/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/flatpak-profiles/deployments",
      created_at: "2024-07-09T01:06:06Z",
      updated_at: "2025-09-25T03:03:52Z",
      pushed_at: "2025-09-25T03:03:48Z",
      git_url: "git://github.com/userbyte/flatpak-profiles.git",
      ssh_url: "git@github.com:userbyte/flatpak-profiles.git",
      clone_url: "https://github.com/userbyte/flatpak-profiles.git",
      svn_url: "https://github.com/userbyte/flatpak-profiles",
      homepage: "",
      size: 7,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Python",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 780174137,
      node_id: "R_kgDOLoCDOQ",
      name: "atl_tux",
      full_name: "userbyte/atl_tux",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/atl_tux",
      description: null,
      fork: true,
      url: "https://api.github.com/repos/userbyte/atl_tux",
      forks_url: "https://api.github.com/repos/userbyte/atl_tux/forks",
      keys_url: "https://api.github.com/repos/userbyte/atl_tux/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/atl_tux/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/atl_tux/teams",
      hooks_url: "https://api.github.com/repos/userbyte/atl_tux/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/atl_tux/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/atl_tux/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/atl_tux/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/atl_tux/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/atl_tux/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/atl_tux/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/atl_tux/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/atl_tux/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/atl_tux/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/atl_tux/statuses/{sha}",
      languages_url: "https://api.github.com/repos/userbyte/atl_tux/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/atl_tux/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/atl_tux/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/atl_tux/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/atl_tux/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/atl_tux/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/atl_tux/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/atl_tux/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/atl_tux/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/atl_tux/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/atl_tux/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/atl_tux/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/atl_tux/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/userbyte/atl_tux/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/atl_tux/issues{/number}",
      pulls_url: "https://api.github.com/repos/userbyte/atl_tux/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/atl_tux/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/atl_tux/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/userbyte/atl_tux/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/atl_tux/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/atl_tux/deployments",
      created_at: "2024-03-31T22:37:04Z",
      updated_at: "2024-03-31T22:49:44Z",
      pushed_at: "2024-03-31T23:23:44Z",
      git_url: "git://github.com/userbyte/atl_tux.git",
      ssh_url: "git@github.com:userbyte/atl_tux.git",
      clone_url: "https://github.com/userbyte/atl_tux.git",
      svn_url: "https://github.com/userbyte/atl_tux",
      homepage: "https://discord.gg/linux",
      size: 3824,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Python",
      has_issues: false,
      has_projects: true,
      has_downloads: false,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "unlicense",
        name: "The Unlicense",
        spdx_id: "Unlicense",
        url: "https://api.github.com/licenses/unlicense",
        node_id: "MDc6TGljZW5zZTE1",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 728952478,
      node_id: "R_kgDOK3Lung",
      name: "bigfart.ing",
      full_name: "userbyte/bigfart.ing",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/bigfart.ing",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/userbyte/bigfart.ing",
      forks_url: "https://api.github.com/repos/userbyte/bigfart.ing/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/bigfart.ing/teams",
      hooks_url: "https://api.github.com/repos/userbyte/bigfart.ing/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/bigfart.ing/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/bigfart.ing/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/bigfart.ing/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/bigfart.ing/deployments",
      created_at: "2023-12-08T04:04:33Z",
      updated_at: "2023-12-08T04:26:19Z",
      pushed_at: "2023-12-08T04:26:54Z",
      git_url: "git://github.com/userbyte/bigfart.ing.git",
      ssh_url: "git@github.com:userbyte/bigfart.ing.git",
      clone_url: "https://github.com/userbyte/bigfart.ing.git",
      svn_url: "https://github.com/userbyte/bigfart.ing",
      homepage: "https://bigfart.ing",
      size: 6352,
      stargazers_count: 0,
      watchers_count: 0,
      language: "CSS",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 645543938,
      node_id: "R_kgDOJno4Ag",
      name: "Presences",
      full_name: "userbyte/Presences",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/Presences",
      description: "🛒 Storage for Presences located at our Presence Store.",
      fork: true,
      url: "https://api.github.com/repos/userbyte/Presences",
      forks_url: "https://api.github.com/repos/userbyte/Presences/forks",
      keys_url: "https://api.github.com/repos/userbyte/Presences/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/Presences/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/Presences/teams",
      hooks_url: "https://api.github.com/repos/userbyte/Presences/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/Presences/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/Presences/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/Presences/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/Presences/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/Presences/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/Presences/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/Presences/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/Presences/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/Presences/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/Presences/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/Presences/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/Presences/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/Presences/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/Presences/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/Presences/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/Presences/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/Presences/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/Presences/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/Presences/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/Presences/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/Presences/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/Presences/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/Presences/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/Presences/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/Presences/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/Presences/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/Presences/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/Presences/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/Presences/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/Presences/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/Presences/deployments",
      created_at: "2023-05-25T22:37:18Z",
      updated_at: "2023-05-25T22:37:18Z",
      pushed_at: "2023-05-25T20:10:47Z",
      git_url: "git://github.com/userbyte/Presences.git",
      ssh_url: "git@github.com:userbyte/Presences.git",
      clone_url: "https://github.com/userbyte/Presences.git",
      svn_url: "https://github.com/userbyte/Presences",
      homepage: "https://premid.app/store",
      size: 35951,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: false,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "mpl-2.0",
        name: "Mozilla Public License 2.0",
        spdx_id: "MPL-2.0",
        url: "https://api.github.com/licenses/mpl-2.0",
        node_id: "MDc6TGljZW5zZTE0",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: true,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 625769525,
      node_id: "R_kgDOJUx8NQ",
      name: "better-jmusicbot",
      full_name: "userbyte/better-jmusicbot",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/better-jmusicbot",
      description:
        "🎶 A Discord music bot that's easy to set up and run yourself!",
      fork: true,
      url: "https://api.github.com/repos/userbyte/better-jmusicbot",
      forks_url: "https://api.github.com/repos/userbyte/better-jmusicbot/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/better-jmusicbot/teams",
      hooks_url: "https://api.github.com/repos/userbyte/better-jmusicbot/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/better-jmusicbot/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/better-jmusicbot/deployments",
      created_at: "2023-04-10T04:01:42Z",
      updated_at: "2023-04-10T04:28:48Z",
      pushed_at: "2024-03-06T06:45:40Z",
      git_url: "git://github.com/userbyte/better-jmusicbot.git",
      ssh_url: "git@github.com:userbyte/better-jmusicbot.git",
      clone_url: "https://github.com/userbyte/better-jmusicbot.git",
      svn_url: "https://github.com/userbyte/better-jmusicbot",
      homepage: "https://jmusicbot.com",
      size: 5260,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Java",
      has_issues: false,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: {
        key: "apache-2.0",
        name: "Apache License 2.0",
        spdx_id: "Apache-2.0",
        url: "https://api.github.com/licenses/apache-2.0",
        node_id: "MDc6TGljZW5zZTI=",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 1,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 566970276,
      node_id: "R_kgDOIctHpA",
      name: "ubforever",
      full_name: "userbyte/ubforever",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/ubforever",
      description: "makeshift autorestart solution",
      fork: false,
      url: "https://api.github.com/repos/userbyte/ubforever",
      forks_url: "https://api.github.com/repos/userbyte/ubforever/forks",
      keys_url: "https://api.github.com/repos/userbyte/ubforever/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/ubforever/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/ubforever/teams",
      hooks_url: "https://api.github.com/repos/userbyte/ubforever/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/ubforever/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/ubforever/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/ubforever/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/ubforever/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/ubforever/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/ubforever/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/ubforever/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/ubforever/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/ubforever/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/ubforever/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/ubforever/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/ubforever/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/ubforever/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/ubforever/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/ubforever/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/ubforever/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/ubforever/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/ubforever/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/ubforever/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/ubforever/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/ubforever/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/ubforever/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/ubforever/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/ubforever/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/ubforever/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/ubforever/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/ubforever/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/ubforever/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/ubforever/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/ubforever/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/ubforever/deployments",
      created_at: "2022-11-16T19:54:19Z",
      updated_at: "2022-11-16T19:54:26Z",
      pushed_at: "2022-12-13T00:23:24Z",
      git_url: "git://github.com/userbyte/ubforever.git",
      ssh_url: "git@github.com:userbyte/ubforever.git",
      clone_url: "https://github.com/userbyte/ubforever.git",
      svn_url: "https://github.com/userbyte/ubforever",
      homepage: null,
      size: 11,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Python",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 561554698,
      node_id: "R_kgDOIXilCg",
      name: "lazykey",
      full_name: "userbyte/lazykey",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/lazykey",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/userbyte/lazykey",
      forks_url: "https://api.github.com/repos/userbyte/lazykey/forks",
      keys_url: "https://api.github.com/repos/userbyte/lazykey/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/lazykey/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/lazykey/teams",
      hooks_url: "https://api.github.com/repos/userbyte/lazykey/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/lazykey/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/lazykey/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/lazykey/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/lazykey/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/lazykey/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/lazykey/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/lazykey/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/lazykey/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/lazykey/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/lazykey/statuses/{sha}",
      languages_url: "https://api.github.com/repos/userbyte/lazykey/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/lazykey/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/lazykey/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/lazykey/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/lazykey/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/lazykey/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/lazykey/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/lazykey/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/lazykey/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/lazykey/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/lazykey/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/lazykey/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/lazykey/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/userbyte/lazykey/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/lazykey/issues{/number}",
      pulls_url: "https://api.github.com/repos/userbyte/lazykey/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/lazykey/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/lazykey/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/userbyte/lazykey/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/lazykey/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/lazykey/deployments",
      created_at: "2022-11-04T00:16:14Z",
      updated_at: "2022-11-04T00:48:26Z",
      pushed_at: "2022-11-04T00:16:15Z",
      git_url: "git://github.com/userbyte/lazykey.git",
      ssh_url: "git@github.com:userbyte/lazykey.git",
      clone_url: "https://github.com/userbyte/lazykey.git",
      svn_url: "https://github.com/userbyte/lazykey",
      homepage: null,
      size: 2,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Python",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 553079070,
      node_id: "R_kgDOIPdRHg",
      name: "Squeedometer",
      full_name: "userbyte/Squeedometer",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/Squeedometer",
      description: "A speedometer for Minecraft",
      fork: true,
      url: "https://api.github.com/repos/userbyte/Squeedometer",
      forks_url: "https://api.github.com/repos/userbyte/Squeedometer/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/Squeedometer/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/Squeedometer/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/Squeedometer/teams",
      hooks_url: "https://api.github.com/repos/userbyte/Squeedometer/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/Squeedometer/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/Squeedometer/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/Squeedometer/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/Squeedometer/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/Squeedometer/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/Squeedometer/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/Squeedometer/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/Squeedometer/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/Squeedometer/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/Squeedometer/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/Squeedometer/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/Squeedometer/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/Squeedometer/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/Squeedometer/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/Squeedometer/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/Squeedometer/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/Squeedometer/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/Squeedometer/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/Squeedometer/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/Squeedometer/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/Squeedometer/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/Squeedometer/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/Squeedometer/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/Squeedometer/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/Squeedometer/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/Squeedometer/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/Squeedometer/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/Squeedometer/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/Squeedometer/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/Squeedometer/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/Squeedometer/deployments",
      created_at: "2022-10-17T17:22:00Z",
      updated_at: "2024-07-01T21:07:23Z",
      pushed_at: "2024-07-01T21:07:19Z",
      git_url: "git://github.com/userbyte/Squeedometer.git",
      ssh_url: "git@github.com:userbyte/Squeedometer.git",
      clone_url: "https://github.com/userbyte/Squeedometer.git",
      svn_url: "https://github.com/userbyte/Squeedometer",
      homepage: null,
      size: 381,
      stargazers_count: 1,
      watchers_count: 1,
      language: "Java",
      has_issues: false,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "cc0-1.0",
        name: "Creative Commons Zero v1.0 Universal",
        spdx_id: "CC0-1.0",
        url: "https://api.github.com/licenses/cc0-1.0",
        node_id: "MDc6TGljZW5zZTY=",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: "master",
    },
    {
      id: 551870363,
      node_id: "R_kgDOIOTfmw",
      name: "baritone",
      full_name: "userbyte/baritone",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/baritone",
      description: "google maps for block game",
      fork: true,
      url: "https://api.github.com/repos/userbyte/baritone",
      forks_url: "https://api.github.com/repos/userbyte/baritone/forks",
      keys_url: "https://api.github.com/repos/userbyte/baritone/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/baritone/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/baritone/teams",
      hooks_url: "https://api.github.com/repos/userbyte/baritone/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/baritone/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/baritone/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/baritone/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/baritone/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/baritone/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/baritone/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/baritone/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/baritone/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/baritone/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/baritone/statuses/{sha}",
      languages_url: "https://api.github.com/repos/userbyte/baritone/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/baritone/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/baritone/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/baritone/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/baritone/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/baritone/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/baritone/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/baritone/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/baritone/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/baritone/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/baritone/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/baritone/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/baritone/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/userbyte/baritone/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/baritone/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/baritone/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/baritone/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/baritone/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/baritone/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/baritone/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/baritone/deployments",
      created_at: "2022-10-15T09:20:36Z",
      updated_at: "2022-10-15T03:36:54Z",
      pushed_at: "2022-10-15T09:32:24Z",
      git_url: "git://github.com/userbyte/baritone.git",
      ssh_url: "git@github.com:userbyte/baritone.git",
      clone_url: "https://github.com/userbyte/baritone.git",
      svn_url: "https://github.com/userbyte/baritone",
      homepage: "",
      size: 13226,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "lgpl-3.0",
        name: "GNU Lesser General Public License v3.0",
        spdx_id: "LGPL-3.0",
        url: "https://api.github.com/licenses/lgpl-3.0",
        node_id: "MDc6TGljZW5zZTEy",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 534554593,
      node_id: "R_kgDOH9yn4Q",
      name: "userbyte.xyz",
      full_name: "userbyte/userbyte.xyz",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/userbyte.xyz",
      description: "my site",
      fork: false,
      url: "https://api.github.com/repos/userbyte/userbyte.xyz",
      forks_url: "https://api.github.com/repos/userbyte/userbyte.xyz/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/userbyte.xyz/teams",
      hooks_url: "https://api.github.com/repos/userbyte/userbyte.xyz/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/userbyte.xyz/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/userbyte.xyz/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/userbyte.xyz/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/userbyte.xyz/deployments",
      created_at: "2022-09-09T08:06:12Z",
      updated_at: "2025-12-13T07:52:37Z",
      pushed_at: "2026-08-24T20:59:22Z",
      git_url: "git://github.com/userbyte/userbyte.xyz.git",
      ssh_url: "git@github.com:userbyte/userbyte.xyz.git",
      clone_url: "https://github.com/userbyte/userbyte.xyz.git",
      svn_url: "https://github.com/userbyte/userbyte.xyz",
      homepage: "https://userbyte.xyz/",
      size: 12445,
      stargazers_count: 0,
      watchers_count: 0,
      language: "CSS",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 504405824,
      node_id: "R_kgDOHhCfQA",
      name: "ubpkg",
      full_name: "userbyte/ubpkg",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/ubpkg",
      description: "very real and good package manager",
      fork: false,
      url: "https://api.github.com/repos/userbyte/ubpkg",
      forks_url: "https://api.github.com/repos/userbyte/ubpkg/forks",
      keys_url: "https://api.github.com/repos/userbyte/ubpkg/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/ubpkg/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/ubpkg/teams",
      hooks_url: "https://api.github.com/repos/userbyte/ubpkg/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/ubpkg/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/ubpkg/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/ubpkg/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/ubpkg/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/ubpkg/tags",
      blobs_url: "https://api.github.com/repos/userbyte/ubpkg/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/ubpkg/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/ubpkg/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/userbyte/ubpkg/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/ubpkg/statuses/{sha}",
      languages_url: "https://api.github.com/repos/userbyte/ubpkg/languages",
      stargazers_url: "https://api.github.com/repos/userbyte/ubpkg/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/ubpkg/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/ubpkg/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/ubpkg/subscription",
      commits_url: "https://api.github.com/repos/userbyte/ubpkg/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/ubpkg/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/ubpkg/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/ubpkg/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/ubpkg/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/ubpkg/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/ubpkg/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/ubpkg/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/userbyte/ubpkg/downloads",
      issues_url: "https://api.github.com/repos/userbyte/ubpkg/issues{/number}",
      pulls_url: "https://api.github.com/repos/userbyte/ubpkg/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/ubpkg/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/ubpkg/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/userbyte/ubpkg/labels{/name}",
      releases_url: "https://api.github.com/repos/userbyte/ubpkg/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/ubpkg/deployments",
      created_at: "2022-06-17T05:31:32Z",
      updated_at: "2022-06-17T05:31:36Z",
      pushed_at: "2022-10-22T03:29:01Z",
      git_url: "git://github.com/userbyte/ubpkg.git",
      ssh_url: "git@github.com:userbyte/ubpkg.git",
      clone_url: "https://github.com/userbyte/ubpkg.git",
      svn_url: "https://github.com/userbyte/ubpkg",
      homepage: null,
      size: 2,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Python",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 485358187,
      node_id: "R_kgDOHO36aw",
      name: "XFCE-MPRIS-Plugin",
      full_name: "userbyte/XFCE-MPRIS-Plugin",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/XFCE-MPRIS-Plugin",
      description: 'MPRIS "Now playing" integration with XFCE panel',
      fork: true,
      url: "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin",
      forks_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/teams",
      hooks_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/XFCE-MPRIS-Plugin/deployments",
      created_at: "2022-04-25T12:15:54Z",
      updated_at: "2026-06-01T03:13:11Z",
      pushed_at: "2024-02-06T07:48:44Z",
      git_url: "git://github.com/userbyte/XFCE-MPRIS-Plugin.git",
      ssh_url: "git@github.com:userbyte/XFCE-MPRIS-Plugin.git",
      clone_url: "https://github.com/userbyte/XFCE-MPRIS-Plugin.git",
      svn_url: "https://github.com/userbyte/XFCE-MPRIS-Plugin",
      homepage: "",
      size: 86,
      stargazers_count: 7,
      watchers_count: 7,
      language: "Shell",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: {
        key: "gpl-3.0",
        name: "GNU General Public License v3.0",
        spdx_id: "GPL-3.0",
        url: "https://api.github.com/licenses/gpl-3.0",
        node_id: "MDc6TGljZW5zZTk=",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 1,
      watchers: 7,
      default_branch: "master",
    },
    {
      id: 449693769,
      node_id: "R_kgDOGs3ISQ",
      name: "bash_historian",
      full_name: "userbyte/bash_historian",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/bash_historian",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/userbyte/bash_historian",
      forks_url: "https://api.github.com/repos/userbyte/bash_historian/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/bash_historian/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/bash_historian/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/bash_historian/teams",
      hooks_url: "https://api.github.com/repos/userbyte/bash_historian/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/bash_historian/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/bash_historian/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/bash_historian/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/bash_historian/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/bash_historian/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/bash_historian/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/bash_historian/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/bash_historian/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/bash_historian/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/bash_historian/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/bash_historian/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/bash_historian/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/bash_historian/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/bash_historian/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/bash_historian/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/bash_historian/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/bash_historian/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/bash_historian/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/bash_historian/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/bash_historian/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/bash_historian/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/bash_historian/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/bash_historian/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/bash_historian/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/bash_historian/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/bash_historian/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/bash_historian/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/bash_historian/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/bash_historian/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/bash_historian/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/bash_historian/deployments",
      created_at: "2022-01-19T13:02:37Z",
      updated_at: "2022-01-19T13:02:42Z",
      pushed_at: "2022-01-19T13:03:37Z",
      git_url: "git://github.com/userbyte/bash_historian.git",
      ssh_url: "git@github.com:userbyte/bash_historian.git",
      clone_url: "https://github.com/userbyte/bash_historian.git",
      svn_url: "https://github.com/userbyte/bash_historian",
      homepage: null,
      size: 0,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Python",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 448358817,
      node_id: "R_kgDOGrlpoQ",
      name: "dotfiles",
      full_name: "userbyte/dotfiles",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/dotfiles",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/userbyte/dotfiles",
      forks_url: "https://api.github.com/repos/userbyte/dotfiles/forks",
      keys_url: "https://api.github.com/repos/userbyte/dotfiles/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/dotfiles/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/dotfiles/teams",
      hooks_url: "https://api.github.com/repos/userbyte/dotfiles/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/dotfiles/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/dotfiles/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/dotfiles/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/dotfiles/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/dotfiles/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/dotfiles/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/dotfiles/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/dotfiles/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/dotfiles/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/dotfiles/statuses/{sha}",
      languages_url: "https://api.github.com/repos/userbyte/dotfiles/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/dotfiles/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/dotfiles/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/dotfiles/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/dotfiles/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/dotfiles/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/dotfiles/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/dotfiles/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/dotfiles/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/dotfiles/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/dotfiles/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/dotfiles/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/dotfiles/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/userbyte/dotfiles/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/dotfiles/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/dotfiles/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/dotfiles/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/dotfiles/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/dotfiles/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/dotfiles/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/dotfiles/deployments",
      created_at: "2022-01-15T18:27:15Z",
      updated_at: "2022-01-15T18:30:05Z",
      pushed_at: "2022-05-24T13:49:54Z",
      git_url: "git://github.com/userbyte/dotfiles.git",
      ssh_url: "git@github.com:userbyte/dotfiles.git",
      clone_url: "https://github.com/userbyte/dotfiles.git",
      svn_url: "https://github.com/userbyte/dotfiles",
      homepage: null,
      size: 3,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Shell",
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 434484633,
      node_id: "R_kgDOGeW1mQ",
      name: "spicetify-cli",
      full_name: "userbyte/spicetify-cli",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/spicetify-cli",
      description:
        "Commandline tool to customize Spotify client. Supports Windows, MacOS and Linux.",
      fork: true,
      url: "https://api.github.com/repos/userbyte/spicetify-cli",
      forks_url: "https://api.github.com/repos/userbyte/spicetify-cli/forks",
      keys_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/spicetify-cli/teams",
      hooks_url: "https://api.github.com/repos/userbyte/spicetify-cli/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/spicetify-cli/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/spicetify-cli/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/spicetify-cli/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/spicetify-cli/deployments",
      created_at: "2021-12-03T06:03:47Z",
      updated_at: "2021-12-03T06:03:48Z",
      pushed_at: "2021-12-02T14:18:58Z",
      git_url: "git://github.com/userbyte/spicetify-cli.git",
      ssh_url: "git@github.com:userbyte/spicetify-cli.git",
      clone_url: "https://github.com/userbyte/spicetify-cli.git",
      svn_url: "https://github.com/userbyte/spicetify-cli",
      homepage: "",
      size: 2747,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: false,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "lgpl-2.1",
        name: "GNU Lesser General Public License v2.1",
        spdx_id: "LGPL-2.1",
        url: "https://api.github.com/licenses/lgpl-2.1",
        node_id: "MDc6TGljZW5zZTEx",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 432565222,
      node_id: "R_kgDOGchr5g",
      name: "userbyte",
      full_name: "userbyte/userbyte",
      private: false,
      owner: {
        login: "userbyte",
        id: 42632711,
        node_id: "MDQ6VXNlcjQyNjMyNzEx",
        avatar_url: "https://avatars.githubusercontent.com/u/42632711?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/userbyte",
        html_url: "https://github.com/userbyte",
        followers_url: "https://api.github.com/users/userbyte/followers",
        following_url:
          "https://api.github.com/users/userbyte/following{/other_user}",
        gists_url: "https://api.github.com/users/userbyte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/userbyte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/userbyte/subscriptions",
        organizations_url: "https://api.github.com/users/userbyte/orgs",
        repos_url: "https://api.github.com/users/userbyte/repos",
        events_url: "https://api.github.com/users/userbyte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/userbyte/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
      },
      html_url: "https://github.com/userbyte/userbyte",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/userbyte/userbyte",
      forks_url: "https://api.github.com/repos/userbyte/userbyte/forks",
      keys_url: "https://api.github.com/repos/userbyte/userbyte/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/userbyte/userbyte/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/userbyte/userbyte/teams",
      hooks_url: "https://api.github.com/repos/userbyte/userbyte/hooks",
      issue_events_url:
        "https://api.github.com/repos/userbyte/userbyte/issues/events{/number}",
      events_url: "https://api.github.com/repos/userbyte/userbyte/events",
      assignees_url:
        "https://api.github.com/repos/userbyte/userbyte/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/userbyte/userbyte/branches{/branch}",
      tags_url: "https://api.github.com/repos/userbyte/userbyte/tags",
      blobs_url:
        "https://api.github.com/repos/userbyte/userbyte/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/userbyte/userbyte/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/userbyte/userbyte/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/userbyte/userbyte/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/userbyte/userbyte/statuses/{sha}",
      languages_url: "https://api.github.com/repos/userbyte/userbyte/languages",
      stargazers_url:
        "https://api.github.com/repos/userbyte/userbyte/stargazers",
      contributors_url:
        "https://api.github.com/repos/userbyte/userbyte/contributors",
      subscribers_url:
        "https://api.github.com/repos/userbyte/userbyte/subscribers",
      subscription_url:
        "https://api.github.com/repos/userbyte/userbyte/subscription",
      commits_url:
        "https://api.github.com/repos/userbyte/userbyte/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/userbyte/userbyte/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/userbyte/userbyte/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/userbyte/userbyte/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/userbyte/userbyte/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/userbyte/userbyte/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/userbyte/userbyte/merges",
      archive_url:
        "https://api.github.com/repos/userbyte/userbyte/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/userbyte/userbyte/downloads",
      issues_url:
        "https://api.github.com/repos/userbyte/userbyte/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/userbyte/userbyte/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/userbyte/userbyte/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/userbyte/userbyte/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/userbyte/userbyte/labels{/name}",
      releases_url:
        "https://api.github.com/repos/userbyte/userbyte/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/userbyte/userbyte/deployments",
      created_at: "2021-11-27T22:07:25Z",
      updated_at: "2026-08-25T00:53:37Z",
      pushed_at: "2026-08-25T00:53:11Z",
      git_url: "git://github.com/userbyte/userbyte.git",
      ssh_url: "git@github.com:userbyte/userbyte.git",
      clone_url: "https://github.com/userbyte/userbyte.git",
      svn_url: "https://github.com/userbyte/userbyte",
      homepage: null,
      size: 1204,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: true,
      has_projects: true,
      has_downloads: false,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      has_pull_requests: true,
      pull_request_creation_policy: "all",
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
  ],
};*/

export default function GitHubRepos() {
  if (ghRepos.status === "SUCCESS" && ghRepos.repos) {
    const listTruncateTo = 5;
    const sortedRepos = ghRepos.repos
      .sort((a, b) => (a.stargazers_count > b.stargazers_count ? -1 : 1))
      .slice(0, listTruncateTo);
    return (
      <div className={styles.main}>
        <p>top {listTruncateTo} projects (sorted by stars)</p>
        <hr />
        <div className="repo_list">
          {sortedRepos.map((repo: GitHubRepo) => {
            return (
              <div
                key={repo.name}
                className="repo_item"
                title={`${repo.full_name} :: ${repo.description}`}
              >
                <a href={repo.html_url} target="_blank">
                  <p className="repo_name">{repo.name}</p>
                  <span>
                    <p className="repo_stargazers">
                      <FontAwesomeIcon icon={faStar} /> {repo.stargazers_count}
                    </p>
                    {repo.language ? (
                      <p className="repo_lang">{repo.language}</p>
                    ) : (
                      <></>
                    )}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    console.error(`failed to get github repos: ${ghRepos.error}`);
    return <></>;
  }
}
