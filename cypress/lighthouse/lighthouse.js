import lighthouse from 'lighthouse';

export const runLighthouseAudit = async (
  url,
) => {

  const runnerResult = await lighthouse(
    url
  );

  return runnerResult;
}