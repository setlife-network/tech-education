### Default Developer Workflow

- Assign yourself to an issue you feel confident in taking on
- Fork the repo, and checkout a new branch from the latest version of `develop`. Always make sure you have synced with the default branch (currently `develop`)
- Name your branch with your initials, and either the issue number or a short description of what you're working on if multiple issues may be involvedin your work. Examples:
```
ol/issue-1
ol/issue-1/update-readme
ol/ui-overhaul
```
- After you've finished testing locally, add any new files, commit and refer to any relevant issues in your commit message. Include `closes #1` if the code you are pushing resolves the issue. Follow these guidelines for writing your commit message (https://chris.beams.io/posts/git-commit/) and try to stick to those rules as closely as possible. Take your time and do not rush when writing commit messages.
- Try to stay focused on one issue at a time and commit frequently, but if it's ever necessary to _close_ multiple issues in a single commit message, be sure to format it as `closes #1, closes #2` since just `closes #1, #2` will leave issue #2 open after merging.
- Before pushing, do another sync with `develop` in case any pull requests have been merged already while you were working. Resolve any conflicts before finalizing the commits and pushing to your branch.
- Create a pull request to `develop` and wait for a reviewer to merge the changes. If any changes are required after review, pushing to your personal branch again will automatically update the pull request
