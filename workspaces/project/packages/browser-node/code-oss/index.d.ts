import { connect, embedGithubProject, embedProject, embedProjectId, openGithubProject, openProject, openProjectId } from './lib';
export type { Project, ProjectOptions, ProjectDependencies, ProjectFiles, ProjectSettings, ProjectTemplate, EmbedOptions, OpenOptions, OpenFileOption, UiThemeOption, UiViewOption, } from './interfaces';
export type { FsDiff, VM } from './vm';
declare const _default: {
    connect: typeof connect;
    embedGithubProject: typeof embedGithubProject;
    embedProject: typeof embedProject;
    embedProjectId: typeof embedProjectId;
    openGithubProject: typeof openGithubProject;
    openProject: typeof openProject;
    openProjectId: typeof openProjectId;
};
export default _default;
